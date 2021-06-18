'use strict';

// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         return this.a + this.b;
//     }

//     console.log(sum());
// }

// function sayName() {
//     console.log(this.name);
// }

// const user = {
//     name: 'John'
// };

// sayName.apply(user);

// function count(num) {
//     return num * this;
// }

// const double = count.bind(2);
// console.log(double(3));

// 1. В обычной функцйии this = window, или undefined
// 2. В объекте сам объект
// 3. В классах новые экземпляры класса
// 4. Ручная привязка: call, apply, bind

const btn = document.querySelector('button');


// Когда обычный синтаксис имеем доступ к this(тоже самое как event target)
// При стрелочной функции будет undefined
btn.addEventListener('click', function () {
    console.log(this);
    this.style.backgroundColor = 'red';
});


const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();


const double = a => a * 2;