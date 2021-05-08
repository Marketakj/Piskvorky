'use strict';

/*const cross = document.querySelector('.button-hra');
const circle = document.querySelector('.button-hra');

let naTahu = cross;

if (naTahu === 'cross') {
  circle.addEventListener('click', () => {
    circle.classList.add('boardfield__cross');
    naTahu === 'circle';
  });
} else {
  cross.addEventListener('click', () => {
    cross.classList.add('boardfield__circle');
    naTahu === 'cross';
    /*document.querySelector('.hraje').src = 'circle.svg';
  });
}*/

let naTahu = 'circle';
document.querySelectorAll('.button-hra').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (naTahu === 'circle') {
      btn.classList.add('boardfield__circle');
      document.querySelector('.circle').src = 'cross.svg';
      naTahu = 'cross';
    } else {
      btn.classList.add('boardfield__cross');
      document.querySelector('.circle').src = 'circle.svg';
      naTahu = 'circle';
    }
  });
});

if (isWinningMove(event.target) === true) {
  if (confirm(`Vyhrál: ${getSymbol(event.target)}. Spustit novou hru?`)) {
    location.reload();
  }
}

const getSymbol = (field) => {
  if (field.classList.contains('boardfield__cross')) {
    return 'cross';
  } else if (field.classList.contains('boardfield__circle')) {
    return 'circle';
  }
};

console.log(getSymbol);

const boardSize = 10; // 10x10

const fields = document.querySelectorAll('.button-hra');
console.log(fields);
const getField = (row, column) => fields[row * boardSize + column];
console.log(getField);

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

console.log(getPosition);

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};

if (isWinningMove(event.target) === true) {
  if (confirm(`Vyhrál: ${getSymbol(event.target)}. Spustit novou hru?`)) {
    location.reload();
  }
}
