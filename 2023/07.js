const normalize = (i, joker) => {
  switch (i) {
    case 'A': return 14;
    case 'K': return 13;
    case 'Q': return 12;
    case 'J': return joker ? 0 : 11;
    case 'T': return 10;
    default: return +i;
  }
};

const handType = (hand) => {
  // Easy all 5 joker solution
  if (hand.join('') === '00000') return 6;
  const make = {};
  for (const n of hand)
    make[n] = (make[n] || 0) + 1;
  if (make[0]) { // Joker processing
    const j = make[0];
    delete make[0];
    const k = Object.entries(make).sort(([,v1], [v2]) => v2 - v1)[0][0];
    make[k] += j;
  }
  const vals = Object.values(make);
  if (vals.length === 1) return 6;
  if (vals.length === 2)
    return (vals[0] === 1 || vals[0] === 4) ? 5 : 4;
  if (vals.length === 3)
    return vals.indexOf(3) !== -1 ? 3 : 2;
  if (vals.length === 4) return 1;
  return 0;
};

const input = document.body.innerText.trim().split('\n').map((row) => {
  const [hand, bid] = row.split(' ');
  return [[...hand], +bid];
});

const compare = ([handA, typeA], [handB, typeB]) => {
  if (typeA != typeB) return typeA - typeB;
  for (let i = 0; i < handA.length; i++) {
    if (handA[i] === handB[i]) continue;
    return handA[i] - handB[i];
  }
  return 0;
};

const doPartWithJoker = (useJokers) => input.map(([hand, bid]) => {
  const normalized = hand.map((c) => normalize(c, useJokers));
  return [normalized, handType(normalized), bid];
}).sort(compare).reduce((t, [,, bid], i) => t + ((i + 1) * bid), 0);

const p1 = doPartWithJoker(false);
const p2 = doPartWithJoker(true);

console.log(`Advent of Code Day 7:
Part 1: ${p1}
Part 2: ${p2}`);
