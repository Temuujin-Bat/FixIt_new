module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [".eslintrc.cjs", "vite.config.ts"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    singleQuote: true,
    "react-hooks/exhaustive-deps": "off",
    "react/display-name": "off",
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/naming-convention": 0,
    "max-len": ["error", { code: 140 }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: ["arrow-function", "function-declaration"],
        unnamedComponents: "arrow-function",
      },
    ],
    "react/require-default-props": "off",
    "react/no-unescaped-entities": 0,
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "off",
    "no-console": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": [
      "off",
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
};
