const findOccurances = ({ character, phrase }) =>
  (phrase.match(new RegExp(character, "g")) || []).length;

const checkLimits = (occurences, { max, min }) =>
  min <= occurences && max >= occurences;

const part1 = (input) =>
  input.filter((policy) => checkLimits(findOccurances(policy), policy.limits))
    .length;

const validPositions = ({
  positions: { first, second },
  character,
  phrase,
}) => {
  if (phrase[first - 1] === character && phrase[second - 1] !== character)
    return true;
  if (phrase[first - 1] !== character && phrase[second - 1] === character)
    return true;
  return false;
};

const part2 = (input) => input.filter(validPositions).length;

module.exports = {
  part1,
  part2,
};
