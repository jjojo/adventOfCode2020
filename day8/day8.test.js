const { expect } = require("chai");
const { readOperations } = require("../utils");
const { part1, part2 } = require("./day8");

describe("Day 8", () => {
  describe("Part 1", () => {
    it("Should return 5 for test input", async () => {
      const testInput = await readOperations("./day8/test-input");
      const result = part1(testInput);
      //console.log("result test part 1:", result);
      expect(result).to.equal(5);
    });

    it("Should return correct answer for my input", async () => {
      const input = await readOperations("./day8/puzzle-input");
      const result = part1(input);
      //console.log("result part 1:", result);
      expect(result).to.equal(1137);
    });
  });

  describe("Part 2", () => {
    it("Should return 8 for test input", async () => {
      const testInput = await readOperations("./day8/test-input");
      const result = part2(testInput);
      //console.log("result test part 2:", result);
      expect(result).to.equal(8);
    });
    it("Should return correct for puzzle input", async () => {
      const testInput = await readOperations("./day8/puzzle-input");
      const result = part2(testInput);
      //console.log("result part 2:", result);
      expect(result).to.equal(1125);
    });
  });
});
