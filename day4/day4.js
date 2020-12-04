const PASSPORT_VALIDATION = {
  byr: (x) => parseInt(x) >= 1920 && parseInt(x) <= 2002,
  iyr: (x) => parseInt(x) >= 2010 && parseInt(x) <= 2020,
  eyr: (x) => parseInt(x) >= 2020 && parseInt(x) <= 2030,
  hgt: (x) => {
    if (x.includes("cm")) return parseInt(x) >= 150 && parseInt(x) <= 193;
    if (x.includes("in")) return parseInt(x) >= 59 && parseInt(x) <= 76;
    return false;
  },
  hcl: (x) => /^#[0-9a-f]{3,6}$/i.test(x),
  ecl: (x) => ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(x),
  pid: (x) => /^\d{9}$/.test(x),
};

const hasSameKeys = (passport) =>
  Object.keys(PASSPORT_VALIDATION).every((key) =>
    Object.keys(passport).includes(key)
  );

const part1 = (input) => input.filter(hasSameKeys).length;

const isValidKey = (passport) => (key) =>
  key === "cid" ? true : PASSPORT_VALIDATION[key](passport[key]);

const part2 = (input) => {
  const hasKeys = input.filter(hasSameKeys);
  return hasKeys.filter((passport) =>
    Object.keys(passport).every(isValidKey(passport))
  ).length;
};

module.exports = {
  part1,
  part2,
};
