#!/usr/bin/env -S tsx
import process from "node:process";
import { Readable } from "node:stream";

const [url] = process.argv.slice(2);
const res = await fetch(new URL(url!), { redirect: "follow" });
Readable.fromWeb(res.body as any).pipe(process.stdout);
