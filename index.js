'use strict';

console.log('funguje');

const cross = document.querySelector('.button-hra');
const circle = document.querySelector('.button-hra');

let naTahu = circle; 

if (naTahu === 'circle') {
    circle.addEventListener('click', () => {
    circle.classList.add('boardfield__circle')};
    naTahu === 'cross';
    } 
    else 
    {
    cross.addEventListener('click', () => {
    cross.classList.add('boardfield__cross')};
    naTahu === 'circle';
    document.querySelector('.hraje').src = 'circle.svg';
    };