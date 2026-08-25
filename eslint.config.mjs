import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import stylex from "@stylexjs/eslint-plugin";

export default defineConfig([
    ...nextVitals,
    {
        plugins: {
            "@stylexjs": stylex,
        },
        rules: {
            "@stylexjs/enforce-extension": "error",
            "@stylexjs/no-unused": "error",
            "@stylexjs/valid-shorthands": "error",
            "@stylexjs/valid-styles": "error",
        },
    },
    globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
