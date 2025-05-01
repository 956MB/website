module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "next/core-web-vitals",
    ],
    plugins: ["@typescript-eslint", "react", "prettier"],
    rules: {
        "prettier/prettier": "warn",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],
        "react/prop-types": "off",
        // "no-useless-escape": "warn",
        "react/no-unknown-property": "warn",
        "react/no-children-prop": "warn",
        "prefer-const": "warn",
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "@next/next/no-img-element": "warn",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
