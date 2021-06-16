'use strict';

const box = document.getElementById('box'),
    buttons = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';

box.style.width = '500px';

box.style.cssText = 'background-color: blue; width = 300px;';

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
const text = document.createTextNode('Hello guys');

div.classList.add('black');

document.body.append(div);

wrapper.append(div);
wrapper.appendChild(div); // depricated


wrapper.prepend(div);

hearts[1].before(div); // after

wrapper.insertBefore(div, hearts[0]); // depricated


circles[0].remove();
wrapper.removeChild(hearts[1]); // depricated

hearts[0].replaceWith(circles[0]); // replaceChild depricated

div.innerHTML = "<p>Hello guys</p>";

div.textContent = "Hello guys";

div.insertAdjacentHTML('afterbegin', "<p>Hello guys</p>");

