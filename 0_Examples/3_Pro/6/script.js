'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

const ans = prompt('Введите ваше имя');

const reg = /n/ig;

console.log(reg.test(ans));
// i not depends on register
// g all
// m multiple strings
// \d digits
// \w words
// \s spaces
// \D not digits
console.log(ans.search(reg));
console.log(ans.match(reg));

const pass = prompt('Password');

console.log(pass.replace(/./g, '*'));

console.log('12-34-56'.replace(/-/g, ':'));