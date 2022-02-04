export function makeHTML(stats, numberList, fileName) {
  const numbersParagraphs = numberList.map((number) => `<p>${number}</p>`);

  if(Number.isNaN(stats.max)) {
    return `
      <section>
        <p class="no-analysis">Gagnasett inniheldur einungis brengluð gildi eða er innihaldslaust!</p>
      </section>
    `
  }

  const template = `
    <section class="numerical-analysis">
      <h2>Töluleg greining</h2>
      <div>
        <p><strong>Stærsta gildi:</strong></p>
        <p>${stats.max}</p>
      </div>
      <div>
        <p><strong>Minnsta gildi:</strong></p>
        <p>${stats.min}</p>
      </div>
      <div>
        <p><strong>Summa:</strong></p>
        <p>${stats.sum.toFixed(3)}</p>
      </div>
      <div>
        <p><strong>Meðaltal:</strong></p>
        <p>${stats.mean.toFixed(3)}</p>
      </div>
      <div>
        <p><strong>Miðgildi:</strong></p>
        <p>${stats.median}</p>
      </div>
      <div>
        <p><strong>Svið:</strong></p>
        <p>${stats.range[0]} - ${stats.range[1]}</p>
      </div>
      <div>
        <p><strong>Frávik:</strong></p>
        <p>${Number.isNaN(stats.variance) ? "Ekki hægt að reikna frávik" : stats.variance.toFixed(3)}</p>
      </div>
      <div>
        <p><strong>Staðalfrávik:</strong></p>
        <p>${Number.isNaN(stats.std) ? "Ekki hægt að reikna frávik" : stats.std.toFixed(3)}</p>
      </div>
    </section>
    <section class="parsed-numbers">
      <h2>Þáttað gagnasett</h2>
      ${numbersParagraphs.join("\n")}
    </section>
  `;

  return template;
}

export function makeIndex(entries) {
  let list = "";
  for (const entry of entries) {
    const link = `<a href="${`${entry}.html`}"><li>Gagnasett ${entry}</li></a>`;
    list += link;
  }

  return `<ul>${list}</ul>`;
}

export function siteTemplate(title, content, showBack = false) {
  const back = showBack ? '<a href="/"><p class="back">Til baka</p></a>' : '';
  return `
  <!doctype html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <link rel="stylesheet" href="styles.css">
      <title>${title ?? ""}</title>
    </head>
    <body>
      <header>
        <h1>${title}</h1>
      </header>
      <main>
        ${content ?? ""}
        ${back}
      </main>
    </body>
  </html>`;
}
