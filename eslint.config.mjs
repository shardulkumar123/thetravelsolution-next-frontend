import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // 1. Core library imports (React, Next, node_modules)
            ["^react", "^next", "^@?\\w"],
            // 2. Custom hooks, api, contexts and providers
            ["^@/hooks", "^@/services", "^@/context", "^@/providers", "^\\.\\./hooks", "^\\./hooks"],
            // 3. Components, layouts, icons
            ["^@/components", "^\\.\\./components", "^\\./components", "^lucide-react"],
            // 4. Utils, helpers, types, styles, and relative/side-effect files
            ["^@/utils", "^@/types", "^@/styles", "^\\./", "^\\.\\./", "^\\u0000"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
