const findKey = (obj, searchedKey) =>
  Object.keys(obj).filter((key) =>
    Object.keys(obj[key]).find((k) => k === searchedKey)
  );

const part1 = (input) => {
  const rules = input.reduce((obj, ruleSet) => ({ ...obj, ...ruleSet }), {});
  let keys = ["shiny gold"];
  for (let i = 0; i < keys.length; i++) {
    newKeys = findKey(rules, keys[i]);
    keys = [...new Set(keys.concat(newKeys))];
  }
  return new Set(keys).size - 1;
};

const bagKeys = (rules, bag) => {
  const vals = Object.values(rules[bag]).map((value) => parseInt(value) || 0);
  const keys = Object.keys(rules[bag]) || [];
  return vals.map((val, i) => Array(val).fill(keys[i])).flat();
};

const part2 = (input) => {
  const rules = input.reduce((obj, ruleSet) => ({ ...obj, ...ruleSet }), {});
  let keys = bagKeys(rules, "shiny gold");
  for (let i = 0; i < keys.length; i++) {
    newKeys = bagKeys(rules, keys[i]);
    keys = keys.concat(newKeys);
  }
  return keys.length;
};

module.exports = {
  part1,
  part2,
};
