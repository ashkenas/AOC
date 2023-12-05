const input = document.body.innerText.split('\n').filter((e) => e);

const p1 = input.reduce((p, c, i) => {
  const rounds = c.split(';').map((round) => [
    +round.match(/(\d+) red/)?.[1] || 0,
    +round.match(/(\d+) green/)?.[1] || 0,
    +round.match(/(\d+) blue/)?.[1] || 0
  ]).reduce((res, [vr, vg, vb]) =>
    res && vr <= 12 && vg <= 13 && vb <= 14
  , true);
  return rounds ? p + i + 1 : p;
}, 0);

const p2 = input.reduce((p, c, i) => {
  let r = 0, g = 0, b = 0;
  c.split(';').forEach((round) => {
    r = Math.max(r, +round.match(/(\d+) red/)?.[1] || 0);
    g = Math.max(g, +round.match(/(\d+) green/)?.[1] || 0);
    b = Math.max(b, +round.match(/(\d+) blue/)?.[1] || 0);
  });
  return p + (r * g * b);
}, 0);

console.log(`Advent of Code Day 3:
Part 1: ${p1}
Part 2: ${p2}`);