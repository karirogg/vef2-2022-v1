// Fékk eslint villu þegar ég reyndi að importa þessu, þetta er alveg eins og í sýnidæmi.
// Læt þetta slide-a
// eslint-disable-next-line
import { describe, expect, it } from '@jest/globals';
import { siteTemplate } from '../make-html';

describe('siteTemplate', () => {
  it('creates a html file given content and title', () => {
    const title = 'My title';
    const content = 'My content';

    expect(siteTemplate(title, content, true)).toBe(`
  <!doctype html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <link rel="stylesheet" href="styles.css">
      <title>My title</title>
    </head>
    <body>
      <header>
        <h1>My title</h1>
      </header>
      <main>
        My content
        <a href="/"><p class="back">Til baka</p></a>
      </main>
    </body>
  </html>`);
  });
});
