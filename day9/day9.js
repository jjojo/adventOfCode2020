const { findPair } = require("../day1/day1");

const part1 = (input, preambleLength) => {
  for (let i = 0; i < input.length; i++) {
    const tempArr = input.slice(i, i + preambleLength);
    const [x, y] = findPair(tempArr, input[i + preambleLength]) || [null, null];
    if (!(x && y)) return input[i + preambleLength];
  }
};

const part2 = (input, searched) => {
  for (let i = 2; i < input.length; i++) {
    for (let j = 0; j < input.length - i; j++) {
      const tempArr = input.slice(j, j + i);
      const subSum = tempArr.reduce((sum, a) => (sum += a), 0);
      if (subSum === searched)
        return tempArr.sort()[0] + tempArr.sort()[tempArr.length - 1];
    }
  }
};

module.exports = {
  part1,
  part2,
};
