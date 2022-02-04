import { join } from 'path';
import { readdir, writeFile, mkdir } from 'fs/promises';
import { parse } from './parse-txt.js';
import { calculateStats } from './calculate-stats.js';
import { makeHTML, makeIndex, siteTemplate } from './make-html.js';
import { direxists } from './lib/file.js';
import { readDataFile } from './read-data.js';

const OUTPUT_DIR = './dist';
const FILE_DIR = './data';

async function main() {
  const files = await readdir(FILE_DIR);

  if (!(await direxists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }

  const links = [];

  files.forEach(async (file) => {
    if(file === '.DS_Store') return;
    const data = await readDataFile(file);

    const numberList = parse(data);

    const stats = calculateStats(numberList);

    const html = makeHTML(stats, numberList);
    const filename = file.split('.')[0];
    const numericalAnalysis = siteTemplate(`Gagnasett ${filename}`, html, true);

    if (filename.length > 0) {
      await writeFile(join(OUTPUT_DIR, `${filename}.html`), numericalAnalysis, {
        flag: 'w+',
      });
      links.push(Number(filename));
    } else {
      console.warn('Missing title', filename);
    }

    links.sort((a,b) => a-b);
    const index = siteTemplate('Gagnasettin mín', makeIndex(links));
    await writeFile(join(OUTPUT_DIR, 'index.html'), index, { flag: 'w+' });
  });
}

main().catch((err) => console.error(err));
