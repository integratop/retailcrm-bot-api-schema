#!/usr/bin/env -S pnpm tsx
import { writeFile } from "node:fs/promises";
import process from "node:process";
import strip from "strip-comments";
import { relative } from "node:path";
import { createReadStream } from "node:fs";
import { createInterface as readLine } from "node:readline";

const __name = "scripts/strip-comments.ts";

async function main() {
  const paths = process.argv.splice(2);
  for (const path of paths) {
    async function* gen() {
      for await (const line of readLine(createReadStream(path))) {
        if (line.trimStart().startsWith("//#")) continue;
        yield line;
      }
    }
    const lines = await Array.fromAsync(gen());
    let output = lines.join("\n");
    output = strip(output);
    console.log(`[${__name}] 💾 ${path}`);
    await writeFile(path, output, "utf8");
  }
}

main().then();
