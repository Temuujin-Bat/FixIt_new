import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    plugins: {
      "react-hooks": pluginReactHooks,
      import: pluginImport,
      "unused-imports": pluginUnusedImports,
      prettier: pluginPrettier,
    },
    rules: {
      // 🔹 React Hooks Rules
      "react-hooks/rules-of-hooks": "error", // 🚨 Detects incorrect hook usage
      "react-hooks/exhaustive-deps": "warn", // ⚠️ Warns about missing useEffect dependencies

      // 🔹 TypeScript Rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ], // Ignore unused vars starting with "_"
      "@typescript-eslint/explicit-module-boundary-types": "off", // Don't force return types

      // 🔹 Import Rules
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal"],
          alphabetize: { order: "asc" },
        },
      ], // Auto-sort imports
      "import/no-unresolved": "error", // Detects unresolved imports
      "import/newline-after-import": "warn", // Ensures new line after import statements

      // 🔹 Unused Imports Cleanup
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // 🔹 Prettier Formatting
      "prettier/prettier": ["error", { singleQuote: true, printWidth: 100 }],
    },
  },
];
