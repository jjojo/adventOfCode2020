const getUniqueCount = (array) => new Set(array).size;

const part1 = (input) =>
  input.reduce(
    (sum, answers) => (sum += getUniqueCount(answers.replace(/ /g, ""))),
    0
  );

const part2 = (input) => {
  return input.reduce((sum, answers) => {
    const groupCount = answers.split(" ").length;
    return groupCount === 1
      ? (sum += answers.length)
      : (sum += getUniqueCount(
          [...answers.replace(/ /g, "")].filter(
            (char) => answers.match(new RegExp(char, "g")).length === groupCount
          )
        ));
  }, 0);
};

module.exports = {
  part1,
  part2,
};
