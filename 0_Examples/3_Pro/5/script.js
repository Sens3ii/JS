'use strict';

// localStorage.setItem('number', 5);

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    changeBtn = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg')) {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

changeBtn.addEventListener('click', () => {
    if (localStorage.getItem('bg')) {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const person = {
    name: 'Alex',
    age: 25
};

const serializedPerson = JSON.stringify(person);

localStorage.setItem('alex', serializedPerson);

