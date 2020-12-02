const { createReadStream } = require("fs");
const readline = require("readline-promise").default;

const readInterface = (pathToFile) =>
  readline.createInterface({ input: createReadStream(pathToFile) });

const toInt = (x) => parseInt(x, 10);

const toPasswordPolicyV1 = (line) => {
  const [limits, character, phrase] = line.split(' ')
  return {
    limits: {
      min: limits.split('-')[0],
      max: limits.split('-')[1]
    },
    character: character.replace(':', ''),
    phrase,
  }
}

const toPasswordPolicyV2 = (line) => {
  const [positions, character, phrase] = line.split(' ')
  return {
    positions: {
      first: positions.split('-')[0],
      second: positions.split('-')[1]
    },
    character: character.replace(':', ''),
    phrase,
  }
}

const readLines = (formatter) => async (pathToFile) =>
await readInterface(pathToFile).map(formatter);

readInts = readLines(toInt)
readPasswordPoliciesV1 = readLines(toPasswordPolicyV1)
readPasswordPoliciesV2 = readLines(toPasswordPolicyV2)

module.exports = {  
  readInts,
  readPasswordPoliciesV1,
  readPasswordPoliciesV2
};
