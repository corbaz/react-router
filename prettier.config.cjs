// prettier.config.cjs
module.exports = {
    arrowParens: "always",
    bracketSameLine: false,
    bracketSpacing: true,
    endOfLine: "lf",
    jsxSingleQuote: false,
    printWidth: 100,
    quoteProps: "as-needed",
    semi: true,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "all",
    useTabs: false,
    overrides: [
        {
            files: "*.{js,jsx,ts,tsx}",
            options: {
                parser: "typescript",
            },
        },
        {
            files: "*.json",
            options: {
                parser: "json",
            },
        },
        {
            files: "*.css",
            options: {
                parser: "css",
            },
        },
        {
            files: "*.md",
            options: {
                parser: "markdown",
                proseWrap: "always",
            },
        },
    ],
};
