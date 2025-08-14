import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      // Ignore all generated Prisma files and node_modules
      "**/node_modules/**/*",
      "**/.prisma/**/*",
      "**/src/generated/**/*",
      "**/.next/**/*",
      "**/dist/**/*",
      "**/build/**/*",
      // Additional patterns that might be used by Vercel
      "**/*.generated.*",
      "**/*.prisma.*",
      "**/generated/**/*"
    ]
  },
  {
    rules: {
      // Disable problematic rules globally as a fallback
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      "@typescript-eslint/no-wrapper-object-types": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-unused-expressions": "off"
    }
  }
];

export default eslintConfig;
