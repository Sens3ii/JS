'use strict';

const btn = document.querySelector('button'),
    overlay = document.querySelector('.overlay');
btn.onclick = function () {
    alert('clicked');
};

btn.addEventListener('click', () => {
    alert('click');
});


const deleteElemenent = (e) => {
    e.target.remove();
};

btn.addEventListener('click', deleteElemenent);
overlay.addEventListener('click', deleteElemenent);
// Всплытие событий когда обработчик событий обрабатывает вложенный элемент

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
});