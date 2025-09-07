#!/usr/bin/env -S pnpm tsx
import { readFile } from "node:fs/promises";

const input = JSON.parse(await readFile("/dev/stdin", "utf-8"));

const newJson = {
  name: input.name,
  version: input.version,
  description: input.description,
  repository: input.repository,
  author: input.author,
  license: input.license,
  keywords: input.keywords,
  dependencies: input.dependencies,
  bin: input.bin,
  type: input.type,
  main: input.main,
  types: input.types,
  module: input.module,
  exports: input.publishConfig?.exports || input.exports,
  engines: input.publishConfig?.engines || input.engines,
  // параметры должны быть внутри publishConfig
  // registry: input.publishConfig?.registry || input.registry,
  // private: input.publishConfig?.private || input.private,
};

const output = JSON.stringify(newJson, null, 2).replaceAll("dist/", "").replaceAll("src/", "");

console.log(output);
