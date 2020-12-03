const checkForTree = (rowstep) => (trees, line, row) => {
  if (row === 0) return [];
  return line[(row * rowstep) % line.length] === "#"
    ? trees.concat("#")
    : trees;
};

part1 = (input) => input.reduce(checkForTree(3), []).length;

const part2 = (input) => {
  const maneuvers = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];

  const countTrees = (rowStep, colStep) =>
    input.filter((_, i) => i % colStep === 0).reduce(checkForTree(rowStep), [])
      .length;

  return maneuvers
    .map((maneuver) => countTrees(...maneuver))
    .reduce((sum, x) => (sum = x * sum));
};

module.exports = {
  part1,
  part2,
};
