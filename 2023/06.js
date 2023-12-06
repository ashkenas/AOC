const input = document.body.innerText.trim().split('\n').map((row) =>
  row.split(':')[1].trim().split(/\s+/).map((n) => +n));

const bounds = (t, d) => {
  const b24ac = Math.sqrt((t * t) - (4 * d));
  return Math.floor((t + b24ac) / 2) - Math.ceil((t - b24ac) / 2) + 1;
};

let p1 = 1;
for (let i = 0; i < input[0].length; i++)
  p1 *= bounds(input[0][i], input[1][i]);

const p2 = bounds(+input[0].join(''), +input[1].join(''));

console.log(`Advent of Code Day 6:
Part 1: ${p1}
Part 2: ${p2}`);