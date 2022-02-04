// Fékk eslint villu þegar ég reyndi að importa þessu, þetta er alveg eins og í sýnidæmi.
// Læt þetta slide-a
// eslint-disable-next-line
import { describe, expect, it } from '@jest/globals';
import { readDataFile } from '../read-data';

describe('readDataFile', () => {
  it('reads a given file and returns strings from them', async () => {
    const input = '1.txt';
    const str = await readDataFile(input);
    expect(str).toBe('688\n904\n607\n299');
  });
});


