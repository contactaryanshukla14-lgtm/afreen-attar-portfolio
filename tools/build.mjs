import { mkdir, copyFile, cp, rm } from "node:fs/promises";
import { resolve, dirname } from "node:path";
const output = resolve("dist");
if (dirname(output) !== process.cwd())
  throw new Error("Invalid output directory");
await rm(output, { recursive: true, force: true });
await mkdir("dist/assets", { recursive: true });
for (const file of [
  "index.html",
  "styles.css",
  "script.js",
  "robots.txt",
  "sitemap.xml",
])
  await copyFile(file, `dist/${file}`);
await cp("assets", "dist/assets", {
  recursive: true,
  filter: (source) => !source.endsWith("afreen-original.png"),
});
console.log("Production website built in dist/.");
