import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Input: map.png sits next to this script, regardless of cwd.
const src = fileURLToPath(new URL("./map.png", import.meta.url));
if (!existsSync(src)) {
  throw new Error(`map.png not found at ${src}; it must sit next to main.ts`);
}

// Output dir: $MAKEFUN_OUTPUT_DIR if set and non-empty, else /output.
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || "/output");
mkdirSync(outDir, { recursive: true });

const dest = resolve(outDir, "map.png");
writeFileSync(dest, readFileSync(src));
console.log(dest);
