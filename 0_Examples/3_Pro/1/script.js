'use strict';


const person = {
    name: 'Alex',
    tel: '87727272',
    parents: {
        mom: 'Olga',
        dad: 'Oleg'
    }
};

console.log(JSON.parse(JSON.stringify(person)));

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';
console.log(clone);
console.log(person);