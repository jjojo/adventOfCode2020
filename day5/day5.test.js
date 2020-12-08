const { expect } = require("chai");
const { readLines } = require("../utils");
const { part1, part2 } = require("./day5");

describe("Day 5", () => {
  describe("Part 1", () => {
    it("Should return [ 567, 119, 820 ] as seatIDs for test input", async () => {
      const testInput = await readLines()("./day5/test-input");
      const result = part1(testInput);
      //console.log("result:", result);
      expect(result).to.equal(820);
    });

    it("Should return correct answer for my input", async () => {
      const input = await readLines()("./day5/input-part1");
      const result = part1(input);
      // console.log("result:", result);
      expect(result).to.equal(871);
    });
  });

  describe("Part 2", () => {
    it("Should return correct answer for my input", async () => {
      const input = await readLines()("./day5/input-part1");
      const result = part2(input);
      //console.log("result part 2:", result);
      expect(result).to.equal(640);
    });
  });
});
