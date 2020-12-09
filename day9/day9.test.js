const { expect } = require("chai");
const { readInts } = require("../utils");
const { part1, part2 } = require("./day9");

describe("Day 9", () => {
  describe("Part 1", () => {
    it("Should return 127 for test input", async () => {
      const testInput = await readInts("./day9/test-input");
      const result = part1(testInput, 5);
      //console.log("result test part 1:", result);
      expect(result).to.equal(127);
    });
    it("Should return correct answer for puzzle input", async () => {
      const input = await readInts("./day9/puzzle-input");
      const result = part1(input, 25);
      //console.log("result test part 1:", result);
      expect(result).to.equal(542529149);
    });
  });

  describe("Part 2", () => {
    it("Should return 62 for test input", async () => {
      const testInput = await readInts("./day9/test-input");
      const result = part2(testInput, 127);
      //console.log("result test part 2:", result);
      expect(result).to.equal(62);
    });
    it("Should return correct for puzzle input", async () => {
      const input = await readInts("./day9/puzzle-input");
      const result = part2(input, 542529149);
      //console.log("result test part 2:", result);
      expect(result).to.equal(75678618);
    });
  });
});
