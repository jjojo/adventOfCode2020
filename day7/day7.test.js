const { expect } = require("chai");
const { readBagRules } = require("../utils");
const { part1, part2 } = require("./day7");

describe("Day 7", () => {
  describe("Part 1", () => {
    it("Should return 4 for test input", async () => {
      const testInput = await readBagRules("./day7/test-input");
      const result = part1(testInput);
      //console.log("result part 1:", result);
      expect(result).to.equal(4);
    });

    it("Shold return correct answer for my input", async () => {
      const input = await readBagRules("./day7/input-part1");
      const result = part1(input);
      //console.log("result part 2:", result);
      expect(result).to.equal(337);
    });
  });

  describe("Part 2", () => {
    // it("Should return 126 for test input", async () => {
    //   const testInput = await readBagRules("./day7/test-input-part2");
    //   const result = part2(testInput);
    //   //console.log("result:", result);
    //   expect(result).to.equal(126);
    // });
    // it("Shold return correct answer for my input", async () => {
    //   const input = await readBagRules("./day7/input-part1");
    //   const result = part2(input);
    //   expect(result).to.equal(50100);
    // });
  });
});
