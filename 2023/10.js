let start;

const nextMove = (c, x, y) => {
  if (c == 'S') start = [x,y];
  switch (c) {
    case '|': return [null, 1, null, 3];
    case '-': return [0, null, 2, null];
    case 'L': return [null, 0, 3, null];
    case 'J': return [3, 2, null, null];
    case '7': return [1, null, null, 2];
    case 'F': return [null, null, 1, 0];
    default: return [null, null, null, null];
  }
};

const input = document.body.innerText.trim().split('\n').map((l, y) =>
  l.split('').map((c, x) => [nextMove(c, x, y), Infinity]));

let p1 = (() => {
  for (let i = 0; i < 4; i++) {
    let [x, y] = start, next = i, j = 1;
    while (next !== null) {
      console.log(x,y,j,next)
      x += next % 2 ? 0 : -next + 1;
      y += next % 2 ? -next + 2 : 0;
      if (input[y][x][1] <= j) return j;
      input[y][x][1] = j++;
      next = input[y][x][0][next];
    }
  }
})();

const p2 = 0;

console.log(`Advent of Code Day 10:
Part 1: ${p1}
Part 2: ${p2}`);
