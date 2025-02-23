import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}, ignores: [".config/", "dist/", "tsconfig.json"]},
  {languageOptions: { globals: globals.browser }},
  {  
    rules: {
      "no-unused-vars": "error",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];