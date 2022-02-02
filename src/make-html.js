export function makeHTML(stats, numberList, fileName) {
  const numbersParagraphs = numberList.map((number) => `<p>${number}</p>`);

  const template = `
    <section>
      <p><strong>Stærsta gildi:</strong> ${stats.max}</p>
      <p><strong>Minnsta gildi:</strong> ${stats.min}</p>
      <p><strong>Summa:</strong> ${stats.sum}</p>
      <p><strong>Meðaltal:</strong> ${stats.mean}</p>
      <p><strong>Miðgildi:</strong> ${stats.median}</p>
      <p><strong>Svið:</strong> ${stats.range[0]} - ${stats.range[1]}</p>
      <p><strong>Frávik:</strong> ${stats.variance}</p>
      <p><strong>Staðalfrávik:</strong> ${stats.std}</p>
    </section>
    <section>
      ${numbersParagraphs.join("\n")}
    </section>
  `;

  return template;
}

export function makeIndex(entries) {
  let list = "";
  for (const entry of entries) {
    const link = `<li><a href="${`${entry}.html`}">${entry}</a></li>`;
    list += link;
  }

  return `<ul>${list}</ul>`;
}

export function siteTemplate(title, content, showBack = false) {
  const back = showBack ? '<p><a href="/">Til baka</a></p>' : "";
  return `
  <!doctype html>
  <html>
    <head>
      <title>${title ?? ""}</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      ${content ?? ""}
      ${back}
    </body>
  </html>`;
}
