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

const toBagRules = (line) => {
  const rules = line
    .replace(/bags|bag/g, "")
    .split("contain")
    .map((s) =>
      s.replace("no", "0").replace(" .", "").replace(" ,", ",").trim()
    );
  return {
    [rules[0]]: rules.slice(1, rules.length).reduce((obj, contains) => {
      const bagAndNumber = contains
        .split(",")
        .map((s) => s.trim().split(/ (.+)/))
        .map((arr) => ({ [arr[1]]: arr[0] }))
        .reduce((obj, subObj) => ({ ...obj, ...subObj }), {});
      return { ...obj, ...bagAndNumber };
    }, {}),
  };
};

const toOps = (line) => ({
  op: line.split(" ")[0],
  value: parseInt(line.split(" ")[1]),
});

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
readBagRules = readLines(toBagRules);
readOperations = readLines(toOps);

module.exports = {
  readLines,
  readMultipleLines,
  readInts,
  readPasswordPoliciesV1,
  readPasswordPoliciesV2,
  readPassports,
  readBagRules,
  readOperations,
};
