const INSTRUCTIONS = {
  nop: (sum, _value, index) => [sum, index + 1],
  acc: (sum, value, index) => [sum + value, index + 1],
  jmp: (sum, value, index) => [sum, index + value],
};

const run = (input) => {
  let sum = 0;
  let visited = [];
  let next = 0;
  while (!visited.includes(next) && input[next]) {
    visited = visited.concat(next);
    [sum, next] = INSTRUCTIONS[input[next].op](sum, input[next].value, next);
  }
  return [sum, visited.includes(input.length - 1)];
};

const part1 = (input) => run(input)[0];

const replace = (i, val, arr) => [...arr.slice(0, i), val, ...arr.slice(i + 1)];

const part2 = (input) => {
  for (let i = 0; i < input.length; i++) {
    const { op, value } = input[i];
    if (op === "acc") continue;
    const [sum, terminated] = run(
      replace(i, { op: op === "jmp" ? "nop" : "jmp", value }, input)
    );
    if (terminated) return sum;
  }
};

module.exports = {
  part1,
  part2,
};
