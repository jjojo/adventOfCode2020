const { createReadStream } = require("fs");
const readline = require("readline-promise").default;

const readInterface = (pathToFile) =>
  readline.createInterface({ input: createReadStream(pathToFile) });

const toInt = (x) => parseInt(x, 10);

const toPasswordPolicyV1 = (line) => {
  const [limits, character, phrase] = line.split(" ");
  return {
    limits: {
      min: limits.split("-")[0],
      max: limits.split("-")[1],
    },
    character: character.replace(":", ""),
    phrase,
  };
};

const toPasswordPolicyV2 = (line) => {
  const [positions, character, phrase] = line.split(" ");
  return {
    positions: {
      first: positions.split("-")[0],
      second: positions.split("-")[1],
    },
    character: character.replace(":", ""),
    phrase,
  };
};

const readPassports = async (pathToFile) => {
  const parsePassports = (string) =>
    string.split(" ").reduce((passportObj, pair) => {
      const [key, val] = pair.split(":");
      return { ...passportObj, [key]: val };
    }, {});

  const readPassportChunks = await readMultipleLines("")(pathToFile);
  return readPassportChunks.map(parsePassports);
};

const readLines = (formatter = (x) => x) => async (pathToFile) =>
  await readInterface(pathToFile).map(formatter);

const readMultipleLines = (stopInput = "") => async (pathToFile) => {
  let previousLine;
  const chunks = await readInterface(pathToFile).reduce((chunks, line) => {
    if (line === stopInput) chunks.push(previousLine) && (previousLine = "");
    previousLine = !previousLine ? line : previousLine.concat(" ", line);
    return chunks;
  }, []);
  return [...chunks, previousLine];
};

readInts = readLines(toInt);
readPasswordPoliciesV1 = readLines(toPasswordPolicyV1);
readPasswordPoliciesV2 = readLines(toPasswordPolicyV2);

module.exports = {
  readLines,
  readMultipleLines,
  readInts,
  readPasswordPoliciesV1,
  readPasswordPoliciesV2,
  readPassports,
};
