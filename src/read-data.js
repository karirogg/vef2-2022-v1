import { join } from 'path';
import { readFile, stat } from 'fs/promises';

export async function readDataFile(file) {
  const FILE_DIR = './data';
  const path = join(FILE_DIR, file);
  const info = await stat(path);

  if (info.isDirectory() || file === '.DS_Store') {
    return undefined;
  }

  const data = await readFile(path);
  return data.toString('utf-8');;
}
