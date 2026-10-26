import { execFileSync, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
    copyFileSync,
    existsSync,
    mkdirSync,
    readFileSync,
    rmSync,
    writeFileSync,
} from "node:fs";
import path from "node:path";
import { devGroups, IDevGroupConfig } from "./config";
import { IDevDraft, suggestedFile, suggestedThumbFile } from "./drafts";
import { buildEntrySnippet } from "./snippet";

const siteRepo = process.cwd();
const imgRepo =
    process.env.IMG_REPO_DIR ?? path.resolve(siteRepo, "../img.956mb.com");

const allowedImgRemote = /github\.com[:/]956MB\/img\.956mb\.com(?:\.git)?$/i;
const allowedSiteRemote = /github\.com[:/]956MB\/website(?:\.git)?$/i;
const allowedGithubUser = "956MB";

export interface ICommitResult {
    ok: boolean;
    text: string;
}

const git = (repo: string, ...args: string[]) =>
    execFileSync("git", ["-C", repo, ...args], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
    }).trim();

const sha1 = (file: string) =>
    createHash("sha1")
        .update(new Uint8Array(readFileSync(file)))
        .digest("hex");

function assertRepos() {
    for (const repo of [siteRepo, imgRepo]) {
        if (!existsSync(path.join(repo, ".git"))) {
            throw new Error(`not a git repo: ${repo}`);
        }
    }

    const imgRemote = git(imgRepo, "remote", "get-url", "origin");
    if (!allowedImgRemote.test(imgRemote)) {
        throw new Error(`refusing to push: origin is ${imgRemote}`);
    }

    const siteRemotes = git(siteRepo, "remote")
        .split("\n")
        .flatMap((name) =>
            git(siteRepo, "remote", "get-url", "--all", name).split("\n"),
        );
    if (!siteRemotes.some((url) => allowedSiteRemote.test(url))) {
        throw new Error(
            `refusing to run: no remote for 956MB/website in ${siteRepo}`,
        );
    }

    const gh = spawnSync("gh", ["api", "user", "--jq", ".login"], {
        encoding: "utf8",
    });
    const login = gh.status === 0 ? gh.stdout.trim() : "";
    if (login && login !== allowedGithubUser) {
        throw new Error(
            `gh is logged in as ${login}, expected ${allowedGithubUser}`,
        );
    }
}

function copyImage(from: string, to: string, steps: string[]) {
    if (!existsSync(from)) {
        throw new Error(`staged image missing: ${from}`);
    }
    mkdirSync(path.dirname(to), { recursive: true });

    if (existsSync(to)) {
        if (sha1(from) !== sha1(to)) {
            throw new Error(`refusing to overwrite ${to}`);
        }
        steps.push(`  skip   ${path.relative(imgRepo, to)} already present`);
        return to;
    }

    copyFileSync(from, to);
    steps.push(`  copy   ${path.relative(imgRepo, to)}`);
    return to;
}

function resolveTarget(draft: IDevDraft, group: IDevGroupConfig) {
    const file = path.join(siteRepo, group.dataFile);
    const source = readFileSync(file, "utf8");
    const marker = `const ${group.target} = [`;
    const at = source.indexOf(marker);

    if (at === -1) {
        throw new Error(`could not find "${marker}" in ${group.dataFile}`);
    }

    const escaped = draft.id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (new RegExp(`^\\s+"${escaped}",$`, "m").test(source)) {
        throw new Error(`id "${draft.id}" already exists in ${group.dataFile}`);
    }

    return { file, source, marker, at };
}

function insertEntry(
    draft: IDevDraft,
    group: IDevGroupConfig,
    target: ReturnType<typeof resolveTarget>,
    steps: string[],
) {
    const { file, source, marker, at } = target;
    writeFileSync(
        file,
        `${source.slice(0, at)}${marker}\n${buildEntrySnippet(draft)}${source.slice(at + marker.length)}`,
    );
    steps.push(`  insert ${group.dataFile} at ${marker}`);
}

const firstLine = (error: unknown) =>
    String((error as { stderr?: Buffer | string }).stderr ?? error)
        .trim()
        .split("\n")[0];

function pushAllRemotes(steps: string[]) {
    const remotes = git(siteRepo, "remote").split("\n").filter(Boolean);

    if (remotes.length === 0) {
        throw new Error("no remotes configured in the site repo");
    }

    const failed: string[] = [];

    for (const remote of remotes) {
        const url = git(siteRepo, "remote", "get-url", "--push", remote);
        try {
            git(siteRepo, "push", remote, "HEAD");
            steps.push(`  site push   ${remote} ${url}`);
        } catch (error) {
            failed.push(remote);
            steps.push(`  site push   ${remote} FAILED — ${firstLine(error)}`);
        }
    }

    if (failed.length === remotes.length) {
        throw new Error(`every site push failed: ${failed.join(", ")}`);
    }

    if (failed.length > 0) {
        steps.push(
            `  retry       ${failed.map((remote) => `git push ${remote}`).join(" ; ")}`,
        );
    }
}

function commitSiteEntry(
    group: IDevGroupConfig,
    title: string,
    steps: string[],
) {
    const paths = [group.dataFile];
    const changes = git(siteRepo, "status", "--porcelain", "--", ...paths);

    if (changes) {
        git(siteRepo, "add", "--", ...paths);
        git(siteRepo, "commit", "-m", title, "--", ...paths);
        steps.push(`  site commit "${title}"`);
    } else {
        steps.push("  site commit skipped (no change)");
    }

    pushAllRemotes(steps);
}

function formatFile(group: IDevGroupConfig, steps: string[]) {
    const result = spawnSync("bunx", ["prettier", "--write", group.dataFile], {
        cwd: siteRepo,
        encoding: "utf8",
    });
    steps.push(
        result.status === 0
            ? `  format ${group.dataFile}`
            : "  format skipped (run bun run format)",
    );
}

export function commitDraft(draft: IDevDraft): ICommitResult {
    const steps: string[] = [];

    try {
        const group = devGroups[draft.groupKey] ?? devGroups.lightroom;
        const file = draft.imageFile || suggestedFile(draft.id);
        const title = draft.title.trim() || draft.id;

        assertRepos();
        const target = resolveTarget(draft, group);
        steps.push(`guards ok → ${imgRepo}`);

        const staged = (name: string) =>
            path.join(siteRepo, ".dev-staging", name);
        const copied = [
            copyImage(
                staged(draft.image.name),
                path.join(imgRepo, "public", draft.imageDir, file),
                steps,
            ),
            ...(draft.thumb
                ? [
                      copyImage(
                          staged(draft.thumb.name),
                          path.join(
                              imgRepo,
                              "public",
                              draft.imageDir,
                              suggestedThumbFile(draft.id),
                          ),
                          steps,
                      ),
                  ]
                : []),
        ];

        const paths = copied.map((file) => path.relative(imgRepo, file));
        const changes = git(imgRepo, "status", "--porcelain", "--", ...paths);

        if (changes) {
            git(imgRepo, "add", "--", ...paths);
            git(imgRepo, "commit", "-m", title, "--", ...paths);
            steps.push(`  commit "${title}"`);
        } else {
            steps.push("  commit skipped (image already committed)");
        }

        git(imgRepo, "push");
        steps.push(`  push   ${git(imgRepo, "rev-parse", "--short", "HEAD")}`);

        insertEntry(draft, group, target, steps);
        formatFile(group, steps);
        commitSiteEntry(group, title, steps);

        for (const source of [draft.image.name, draft.thumb?.name ?? ""].filter(
            Boolean,
        )) {
            rmSync(staged(source), { force: true });
        }

        steps.push(
            "",
            "deploys kick off from both pushes; the CDN url works once",
            "img.956mb.com finishes building.",
        );

        return { ok: true, text: steps.join("\n") };
    } catch (error) {
        steps.push(
            "",
            `failed: ${error instanceof Error ? error.message : String(error)}`,
        );
        return { ok: false, text: steps.join("\n") };
    }
}
