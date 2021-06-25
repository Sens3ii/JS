'use strict';

// function* generator() {
//     yield 'S';
//     yield 'C';
//     yield 'R';
//     yield 'I';
//     yield 'P';
//     yield 'T';
// }

// const str = generator();
// console.log(str.next());
// console.log(str.next()); //.value
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());


function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

// const counter = count(7);

for (let i of count(7)) {
    console.log(i);
}

// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());