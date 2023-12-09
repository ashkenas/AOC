const input = document.body.innerText.trim().split('\n').map((l) =>
  l.split(' ').map((n) => +n));

const reduceWith = (reducer) => input.map((l) => {
  const layers = [[...l]];
  while (layers[layers.length - 1].some((i) => i))
    layers.push(layers[layers.length - 1].map((v, j, a) => a[j + 1] - v)
      .filter((n) => !isNaN(n)));
  return layers.reduceRight(reducer, 0);
}).reduce((a, b) => a + b, 0);

const p1 = reduceWith((a, b) => a + b[b.length - 1]);
const p2 = reduceWith((a, b) => b[0] - a);

console.log(`Advent of Code Day 9:
Part 1: ${p1}
Part 2: ${p2}`);
