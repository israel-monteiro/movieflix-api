import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],

        languageOptions: {
            globals: globals.node,
        },
    },
    pluginJs.configs.recommended,

    ...tseslint.configs.recommended,

    eslintConfigPrettier,
];
