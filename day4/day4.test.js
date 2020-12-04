const { expect } = require("chai");
const { readPassports } = require("../utils");
const { part1, part2 } = require("./day4");

describe("Day 4", () => {
  describe("Part 1", () => {
    it("Should return the count of 2 valid passwords for test input", async () => {
      const testInput = await readPassports("./day4/test-input");
      const result = part1(testInput);
      console.log("result:", result);
      expect(result).to.equal(2);
    });

    it("Should return correct answer for my input", async () => {
      const myInput = await readPassports("./day4/input-part1");
      const result = part1(myInput);
      console.log(result);
      expect(result).to.equal(204);
    });
  });

  describe("Part 2", () => {
    it("Should return correct answer for my input", async () => {
      //const myInput = await readPassports("./day4/valid-test-input-part2");
      // const myInput = await readPassports("./day4/invalid-test-input-part2");
      const myInput = await readPassports("./day4/input-part1");
      //const myInput = await readPassports("./day4/test-input");

      const result = part2(myInput);
      console.log(result);
      expect(result).to.equal(179);
    });
  });
});
