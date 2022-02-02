export function parse(str) {
  const rawList = str.split("\n");
  const out = [];

  for (str of rawList) {
    const numberOfString = stringToNumber(str);
    if (!Number.isNaN(numberOfString)) out.push(stringToNumber(str));
  }

  return out;
}

export function stringToNumber(str) {
  if (str === null || str === undefined) return NaN;
  const trimmed = str.trim();
  if (trimmed === "") return NaN;
  const cleanedString = str.replace(/\./g, "").replace(/\,/g, ".");

  return Number(cleanedString);
}
