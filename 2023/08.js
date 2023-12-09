const [steps, rawTree] = document.body.innerText.trim().split('\n\n');

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const lcm = (a, b) => a * b / gcd(a, b);

const tree = rawTree.split('\n').reduce((tree, line) => {
  const [, at, ...dirs] = (/(.{3}) = \((.{3}), (.{3})\)/).exec(line);
  tree[at] = dirs;
  return tree;
}, {});

const lengths = Object.keys(tree).filter((k) => k.endsWith('A')).sort().map((k) => {
  let i = 0;
  while (!k.endsWith('Z'))
    k = tree[k][+(steps[i++ % steps.length] === 'R')];
  return i;
});

const p1 = lengths[0];
const p2 = lengths.reduce(lcm);

console.log(`Advent of Code Day 8:
Part 1: ${p1}
Part 2: ${p2}`);
