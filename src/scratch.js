// const badrow = [1, 2, 3];
// const goodrow = [3, 3, 3];

const x = "x";
const y = "y";
const winnerForY = [
  [y, y, y],
  [x, x, y],
  [x, null, null],
];
const winnerForY1 = [
  [y, x, y],
  [y, null, y],
  [y, null, x],
];
const winnerForY2 = [
  [null, x, y],
  [y, y, x],
  [y, null, x],
];
const noWinner = [
  [null, x, x],
  [y, null, y],
  [y, null, x],
];

// column1 = [y,y,y]
// for loop 1
//     iteration through parent array.
//         get value of 'current column value'
// [
//   [y, x, y],
//   [y, null, y],
//   [y, null, x],
// ];

function checkWinner(board) {
  // some row winner
  // - for each row, check if winner
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    if (rowChecker(row)) return true;
  }
  // some col winner
  // - for each col, check if winner
  let nextValueFromCol;
  let rowWeCreateFromCols = [];
  for (let columnIdx = 0; columnIdx < board.length; columnIdx++) {
    for (let rowIdx = 0; rowIdx < board.length; rowIdx++) {
      nextValueFromCol = board[rowIdx][columnIdx];
      rowWeCreateFromCols.push(nextValueFromCol);
    }
    if (rowChecker(rowWeCreateFromCols)) return true;
    rowWeCreateFromCols = [];
  }

  //   let rowWeCreateFromDiags;
  //   for (let k = 0; k < board.length; k++) {
  //     const element = board[k][k];
  //   }
  // some diag winner
  // - some blackmagic for diag

  return false;
}

function rowChecker(row) {
  const thingWeHopeIsSame = row[0];
  for (let i = 0; i < row.length; i++) {
    const element = row[i];
    if (element !== thingWeHopeIsSame) return false;
  }

  return true;
}

console.log(
  JSON.stringify({
    winnerForY: checkWinner(winnerForY),
    winnerForY1: checkWinner(winnerForY1),
    winnerForY2: checkWinner(winnerForY2),
    noWinner: checkWinner(noWinner),
  })
);
