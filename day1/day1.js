const findPair = (input, sum) => {
  const set = new Set();
  for (let x of input) {
    const addend = sum - x;
    if (set.has(addend)) return [x, addend];
    set.add(x);
  }
  return null;
};

const part1 = (input) => {
  const [x, y] = findPair(input, 2020);
  return x * y;
};

const findTriplet = (input, sum) => {
  for (let z of input) {
    const currentSum = sum - z;
    const pair = findPair(input, currentSum);
    if (pair) return [pair[0], pair[1], z];
  }
};

const part2 = (input) => {
  const [x, y, z] = findTriplet(input, 2020);
  return x * y * z;
};

module.exports = {
  part1,
  part2,
};
