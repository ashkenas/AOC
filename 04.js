const input = document.body.innerText.split('\n').filter((e) => e);

const cards = input.map((l) => {
  const [card, arrays] = l.split(':');
  const [winners, mine] = arrays.split('|').map((nums) =>
    nums.split(/\s+/).filter((e) => e)
  );
  return [
    +card.split('Card ')[1],
    mine.filter((n) => winners.includes(n)).length,
    1
  ];
});

const p1 = cards.reduce((total, [, points]) =>
  points ? total + Math.pow(2, points - 1) : total
, 0);

const p2 = cards.reduceRight((total, card) =>
  total + (card[2] = cards.slice(card[0], card[0] + card[1]).reduce((a, b) =>
    a + b[2]
  , 1))
, 0);

console.log(`Advent of Code Day 4:
Part 1: ${p1}
Part 2: ${p2}`);