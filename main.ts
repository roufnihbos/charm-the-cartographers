import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "map.png");

if (!existsSync(src)) {
  console.error(`ERROR: map.png not found at ${src}. Render map.svg to map.png in the repo root first.`);
  process.exit(1);
}

const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || "/output");
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "map.png");
copyFileSync(src, dest);
console.log(`Wrote ${dest}`);
