export function max(array) {
  if (array.length === 0) return NaN;
  let out = array[0];

  for (const item of array) {
    if (item > out) out = item;
  }

  return out;
}

export function min(array) {
  if (array.length === 0) return NaN;
  let out = array[0];

  for (const item of array) {
    if (item < out) out = item;
  }

  return out;
}

function sum(array) {
  if (array.length === 0) return NaN;
  let out = 0;

  for (const item of array) out += item;

  return out;
}

function mean(array) {
  if (array.length === 0) return NaN;
  return sum(array) / array.length;
}

function median(array) {
  if (array.length === 0) return NaN;
  const sortedArray = [...array].sort((a, b) => a - b);
  if (sortedArray.length % 2 === 1)
    return sortedArray[(sortedArray.length - 1) / 2];

  return (
    (sortedArray[sortedArray.length / 2 - 1] +
      sortedArray[sortedArray.length / 2]) /
    2
  );
}

function range(array) {
  if (array.length === 0) return NaN;
  return [min(array), max(array)];
}

function variance(array) {
  if (array.length === 0) return NaN;
  const m = mean(array);
  let out = 0;

  for (const item of array) out += (item - m) * (item - m);

  return out / (array.length - 1);
}

function std(array) {
  if (array.length === 0) return NaN;
  return Math.sqrt(variance(array));
}

export function calculateStats(array) {
  return {
    max: max(array),
    min: min(array),
    sum: sum(array),
    mean: mean(array),
    median: median(array),
    range: range(array),
    variance: variance(array),
    std: std(array),
  };
}
