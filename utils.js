const { createReadStream } = require("fs");
const readline = require("readline-promise").default;

const readInterface = (pathToFile) =>
  readline.createInterface({ input: createReadStream(pathToFile) });

const toInt = (x) => parseInt(x, 10);

const readLines = async (pathToFile) =>
  await readInterface(pathToFile).map(toInt);

module.exports = {
  readLines,
};
