const { expect } = require("chai");
const { readLines } = require("../utils");
const { part1, part2 } = require("./day3");

describe("Day 3", () => {
  describe("Part 1", () => {
    it("Should return the count of 7 trees for test input", async () => {
      const testInput = await readLines()("./day3/test-input");
      const result = part1(testInput);
      console.log("result:", result);
      expect(result).to.equal(7);
    });

    it("Should return correct answer for my input", async () => {
      const myInput = await readLines()("./day3/input-part1");
      const result = part1(myInput);
      console.log(result);
      expect(result).to.equal(211);
    });
  });

  describe("Part 2", () => {
    it("Should return correct answer for my input", async () => {
      const myInput = await readLines()("./day3/input-part1");
      const result = part2(myInput);
      console.log(result);
      expect(result).to.equal(3584591857);
    });
  });
});
