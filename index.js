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
      document.querySelector('.circle').src = 'circle.svg';
      naTahu = 'cross';
    } else {
      btn.classList.add('boardfield__cross');
      document.querySelector('.circle').src = 'cross.svg';
      naTahu = 'circle';
    }
  });
});
