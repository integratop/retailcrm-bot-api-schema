#!/usr/bin/env -S pnpm tsx
import { createInterface } from "node:readline";
import process from "node:process";

async function* gen() {
  for await (const line of createInterface(process.stdin)) {
    if (line.trimStart().startsWith('"x-')) yield "// @ts-ignore";
    yield line.replaceAll("аудиосообщений", "аудио сообщений");
  }
}

const lines = await Array.fromAsync(gen());
let output = lines.join("\n");
output = `import { OpenAPIV3 } from "openapi-types";

export const schema: OpenAPIV3.Document = ${output};
`;

console.log(output);
