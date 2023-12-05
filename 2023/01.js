const input = document.body.innerText.split('\n').filter(e => e);

const word2num = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9'
};

const p1 = input.map(l => {
  const digits = [...l.matchAll(/\d/g)].map(e => e[0]);
  return +(digits[0] + digits[digits.length - 1]);
}).reduce((a, b) => a + b, 0);

const p2 = input.map(l => {
  const digits = [];
  const regex = /\d|one|two|three|four|five|six|seven|eight|nine/g;
  let match;
  while (match = regex.exec(l)) {
    regex.lastIndex = match.index + 1;
    digits.push(word2num[match[0]] || match[0]);
  }
  return +(digits[0] + digits[digits.length - 1]);
}).reduce((a, b) => a + b, 0);

console.log(`Advent of Code Day 1:
Part 1: ${p1}
Part 2: ${p2}`);