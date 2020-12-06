const { expect } = require("chai");
const { readMultipleLines } = require("../utils");
const { part1, part2 } = require("./day6");

describe("Day 6", () => {
  describe("Part 1", () => {
    it("Should return 11 for test input", async () => {
      const testInput = await readMultipleLines("")("./day6/test-input");
      const result = part1(testInput);
      //console.log("result:", result);
      expect(result).to.equal(11);
    });

    it("Shold return correct answer for my input", async () => {
      const input = await readMultipleLines("")("./day6/input-part1");
      const result = part1(input);
      //console.log("result:", result);
      expect(result).to.equal(7283);
    });
  });

  describe("Part 2", () => {
    it("Should return 6 for test input", async () => {
      const testInput = await readMultipleLines("")("./day6/test-input");
      const result = part2(testInput);
      //console.log("result:", result);
      expect(result).to.equal(6);
    });

    it("Shold return correct answer for my input", async () => {
      const testInput = await readMultipleLines("")("./day6/input-part1");
      const result = part2(testInput);
      //console.log("result:", result);
      expect(result).to.equal(3520);
    });
  });
});
