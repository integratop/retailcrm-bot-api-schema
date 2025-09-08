import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    passWithNoTests: true,
    environment: "node",
    sequence: { hooks: "list" },
    testTimeout: 60_000,
    // setupFiles: ["dotenv/config"],
    clearMocks: true,
    include: ["**/*.test.ts"],
    exclude: ["node_modules"],
  },
});
