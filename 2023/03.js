const input = document.body.innerText.split('\n');

const nums = [];
const symbols = [];

for (let i = 0; i < input.length; i++) {
  [...input[i].matchAll(/\d+/g)].forEach((match) => nums.push({
    start: match.index,
    end: match.index + match[0].length - 1,
    line: i,
    value: +match[0]
  }));
  [...input[i].matchAll(/[^0-9\.]/g)].forEach((match) => symbols.push({
    x: i,
    y: match.index,
    symbol: match[0]
  }));
}

const p1 = symbols.reduce((p, { x, y }) =>
   p + nums.reduce((acc, { start, end, line, value }) =>
    (x >= line - 1 && x <= line + 1 && y >= start - 1 && y <= end + 1)
      ? acc + value
      : acc
  , 0)
, 0);

const p2 = symbols.filter(({ symbol }) => symbol === '*')
  .reduce((p, { x, y }) => {
    const adj = nums.filter(({ start, end, line }) =>
      x >= line - 1 && x <= line + 1 && y >= start - 1 && y <= end + 1
    , []);
    return adj.length === 2 ? p + (adj[0].value * adj[1].value) : p;
  }, 0);

console.log(`Advent of Code Day 3:
Part 1: ${p1}
Part 2: ${p2}`);
