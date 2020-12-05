const PLANE_SIZE = {
  rows: 128,
  cols: 8,
};

const half = (span) => Math.ceil((span[1] - span[0]) / 2);

const takeUpper = (span) => [span[0] + half(span), span[1]];
const takeLower = (span) => [span[0], span[1] - half(span)];

const binSearch = (startSpan) => (opertaions, lowerToken) =>
  [...opertaions].reduce((span, token) => {
    return token === lowerToken ? takeLower(span) : takeUpper(span);
  }, startSpan)[opertaions[opertaions.length - 1] === lowerToken ? 0 : 1];

const findRow = binSearch([0, PLANE_SIZE.rows - 1]);
const findCol = binSearch([0, PLANE_SIZE.cols - 1]);

const getSeatId = (operations) => {
  const row = findRow(operations.substring(0, PLANE_SIZE.cols - 1), "F");
  const col = findCol(
    operations.substring(PLANE_SIZE.cols - 1, operations.length),
    "L"
  );
  return row * PLANE_SIZE.cols + col;
};

const part1 = (input) => Math.max(...input.map(getSeatId));

const part2 = (input) => {
  const seatIds = input.map(getSeatId);
  const seatId =
    seatIds.sort((a, b) => a - b).find((id, i, arr) => arr[i + 1] === id + 2) +
    1;
  return seatId;
};

module.exports = {
  part1,
  part2,
};
