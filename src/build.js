import { join } from "path";
import { readFile, readdir, stat, writeFile, mkdir } from "fs/promises";
import { parse } from "./parse-txt.js";
import { calculateStats } from "./calculate-stats.js";
import { makeHTML, makeIndex, siteTemplate } from "./make-html.js";
import { direxists } from "./lib/file.js";

const OUTPUT_DIR = "./dist";
const FILE_DIR = "./data";

async function main() {
  const files = await readdir(FILE_DIR);

  if (!(await direxists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }

  const links = [];

  files.forEach(async (file) => {
    const path = join(FILE_DIR, file);
    const info = await stat(path);

    if (info.isDirectory() || file === '.DS_Store') {
      return;
    }

    const data = await readFile(path);

    const str = data.toString('utf-8');

    const numberList = parse(str);

    const stats = calculateStats(numberList);

    const html = makeHTML(stats, numberList);
    const numericalAnalysis = siteTemplate(file, html, true);
    const filename = file.split(".")[0];

    if (filename.length > 0) {
      await writeFile(join(OUTPUT_DIR, `${filename}.html`), numericalAnalysis, {
        flag: "w+",
      });
      links.push(filename);
    } else {
      console.warn("Missing title", path);
    }

    const index = siteTemplate("My datasets", makeIndex(links));
    await writeFile(join(OUTPUT_DIR, "index.html"), index, { flag: "w+" });
  });
}

main().catch((err) => console.error(err));
