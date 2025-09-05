import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "./src/index.ts",
    cli: "./src/cli.ts",
  },
  outDir: "dist",
  format: ["esm"],
  // https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping
  target: "ES2020",
  clean: false,
  dts: {
    // типы используем из зависимости, а не копируем в свои .d.ts (меньше к нам вопросов)
    resolve: false,
    oxc: true,
  },
  minify: false,
  treeshake: true,
  outputOptions: {
    entryFileNames: "[name].js",
    chunkFileNames: "[name].js",
    banner: (chunk) => (chunk.name === "cli" ? `#!/usr/bin/env -S node` : ""),
    sanitizeFileName: true,
    minifyInternalExports: true,
  },
  exports: {
    devExports: true,
    customExports(pkg, context) {
      pkg["./schemas/schema.json"] = "./src/schemas/schema.json";
      delete pkg["./cli"];
      return pkg;
    },
  },
});
