// eslint.config.js
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        ignores: [
            "dist/**",
            "build/**",
            "node_modules/**",
            ".react-router/**",
            "public/**",
            "*.config.js",
            "*.config.ts",
        ],
    },

    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
                project: "./tsconfig.json",
            },
            globals: {
                React: "readonly",
                JSX: "readonly",
            },
        },
        plugins: {
            "@typescript-eslint": tseslint,
            react: react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "jsx-a11y": jsxA11y,
        },
        rules: {
            // TypeScript específicas
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-non-null-assertion": "warn",
            "@typescript-eslint/prefer-nullish-coalescing": "warn",
            "@typescript-eslint/prefer-optional-chain": "warn",

            // React
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/jsx-no-target-blank": "error",
            "react/jsx-key": "error",
            "react/no-array-index-key": "warn",
            "react/no-danger": "warn",

            // React Hooks
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            // React Refresh
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],

            // Accesibilidad
            "jsx-a11y/alt-text": "error",
            "jsx-a11y/anchor-has-content": "error",
            "jsx-a11y/aria-role": "error",
            "jsx-a11y/click-events-have-key-events": "warn",
            "jsx-a11y/no-noninteractive-element-interactions": "warn",

            // Calidad de código general
            "no-console": "warn",
            "no-debugger": "error",
            "no-duplicate-imports": "error",
            "prefer-const": "error",
            "no-var": "error",

            // Formato: TODO OFF porque lo maneja Prettier
            semi: "off",
            quotes: "off",
            indent: "off",
            "comma-dangle": "off",
            "object-curly-spacing": "off",
            "array-bracket-spacing": "off",

            // Específicas para React Router v7
            "no-restricted-imports": [
                "error",
                {
                    patterns: [
                        {
                            group: ["react-router-dom"],
                            message:
                                "Use 'react-router' instead of 'react-router-dom' in React Router v7",
                        },
                    ],
                },
            ],
        },
        settings: {
            react: {
                version: "detect",
            },
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                    project: "./tsconfig.json",
                },
            },
        },
    },

    {
        files: [
            "*.config.ts",
            "*.config.js",
            "vite.config.ts",
            "react-router.config.ts",
        ],
        rules: {
            "no-console": "off",
            "@typescript-eslint/no-explicit-any": "off",
        },
    },

    {
        files: ["app/routes/**/*.tsx", "app/routes/**/*.ts"],
        rules: {
            "react-refresh/only-export-components": "off",
            "no-console": "warn",
        },
    },

    {
        files: ["app/components/**/*.tsx", "app/components/**/*.ts"],
        rules: {
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true, checkJS: false },
            ],
        },
    },
];
