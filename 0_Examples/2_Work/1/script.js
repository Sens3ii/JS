'use strict';

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

console.log(btns[0].classList.length);
console.log(btns[0].classList.item(0));
console.log(btns[0].classList.add('red'));
console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('blue'));


if (btns[1].classList.contains('red')) {
    console.log('Red is a class');
}

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
});

console.log(btns[0].className); // depricated

wrapper.addEventListener('click', (event) => {
    // event.target.classList.contains('blue')
    // event.target.matches('button.red')
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);