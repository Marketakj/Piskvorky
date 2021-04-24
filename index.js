'use strict';

console.log('funguje');

/*const circle = document.querySelectorAll('.button-hra');

circle.addEventListener('click', () => {
  circle.classList.add('boardfield');
});*/

const cross = document.querySelector('.button-hra');
const circle = document.querySelector('.button-hra');

let naTahu = circle; 

if (jeNaTahu === 'circle') {
  circle.addEventListener('click', () => {
  circle.classList.add('boardfield');
  jeNaTahu === 'cross'
  } else {
  cross.addEventListener('click', () => {
    cross.classList.add('boardfield');
    jeNaTahu === 'circle';
  });