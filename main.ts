// bring-the-humans-03 — entrypoint (Node 22, standard library only).
//
// The entry is the TikTok video itself; this program only hands its address
// to the house. It reads VIDEO.json out of the repository, checks that it
// holds a url string, and writes the same bytes to /output/VIDEO.json, where
// the gate reads them. The house then reads the video's views from TikTok.
//
// Run locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FILE = "VIDEO.json";
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const raw = readFileSync(join(botDir, FILE));
const parsed: unknown = JSON.parse(raw.toString("utf8"));
if (
  typeof parsed !== "object" ||
  parsed === null ||
  Array.isArray(parsed) ||
  typeof (parsed as { url?: unknown }).url !== "string" ||
  !/^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/]+\/video\/\d+$/.test(
    (parsed as { url: string }).url,
  )
) {
  console.error(`${FILE} must be a JSON object with a TikTok video url`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, FILE), raw);
console.log(`wrote ${join(outputDir, FILE)}`);
