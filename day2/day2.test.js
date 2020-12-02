const { expect } = require("chai");
const { readPasswordPoliciesV1 } = require("../utils");
const { part1, part2 } = require("./day2");

describe("Day 2", () => {
  describe("Part 1", () => {
    it("Should return the count of 2 valid passwords for test input", async () => {
      const testInput = await readPasswordPoliciesV1("./day2/test-input");
      const result = part1(testInput);
      console.log(result);
      expect(result).to.equal(2);
    });

    it("Should return correct answer for my input", async () => {
      const myInput = await readPasswordPoliciesV1("./day2/input-part1");
      const result = part1(myInput);
      console.log(result);
      expect(result).to.equal(474);
    });
  });

  describe("Part 2", () => {
    it("Should return the count of 1 valid passwords for test input", async () => {
      const testInput = await readPasswordPoliciesV2("./day2/test-input");
      const result = part2(testInput);
      console.log(result);
      expect(result).to.equal(1);
    });

    it("Should return correct answer for my input", async () => {
      const myInput = await readPasswordPoliciesV2("./day2/input-part1");
      const result = part2(myInput);
      console.log(result);
      expect(result).to.equal(745);
    });
  });
});
