module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    plugins: ["@typescript-eslint", "react", "prettier"],
    rules: {
        "prettier/prettier": "error",
    },
};
