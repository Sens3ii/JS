'use strict';

console.log(1);

setTimeout(() => {
    console.log("Timeout");
}, 2000);


setTimeout(() => {
    console.log("Timeout 2");
}, 4000);

console.log(2);