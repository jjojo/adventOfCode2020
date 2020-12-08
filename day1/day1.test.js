const { expect } = require("chai");
const { readInts } = require("../utils");
const { part1, part2 } = require("./day1");

describe("Day 1", () => {
  describe("Day 1 part 1", () => {
    it("should return 514579 for given test input", () => {
      const testInput = [1721, 979, 366, 299, 675, 1456];
      const result = part1(testInput);
      expect(result).to.equal(514579);
    });

    it("should return correct answer for my input", async () => {
      const myInput = await readInts("./day1/input-part1");
      const result = part1(myInput);
      //console.log(result);
      expect(result).to.equal(1009899);
    });
  });

  describe("Day 1 part 2", () => {
    it("should return 241861950 for given test input", () => {
      const testInput = [1721, 979, 366, 299, 675, 1456];
      const result = part2(testInput);
      expect(result).to.equal(241861950);
    });

    it("should return correct answer for my input", async () => {
      const myInput = await readInts("./day1/input-part1");
      const result = part2(myInput);
      //console.log(result);
      expect(result).to.equal(44211152);
    });
  });
});
