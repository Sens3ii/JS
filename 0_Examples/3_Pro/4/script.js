'use strict';

// filter

// const names = ['A', 'B', 'C', 'D', 'E', 'AFE', 'GET', 'KOS'];

// const newNames = names.filter(name => name.length < 3);
// console.log(newNames);

// map 

// const answers = ['Ivan', 'ANNA', 'OlEEg'];
// const results = answers.map(item => item.toLowerCase());
// console.log(results);


// every/some

// const nums = [4, 1, 2, 3, 3, 5, 5, 7, 6];
// console.log(nums.some(item => item % 2 == 0));
// console.log(nums.every(item => item > 0));

// reduce

// const arr = [4, 5, 1, 3, 4, 2, 4];

// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

// obj entries

const obj = {
    ivan: 'person',
    anna: 'person',
    cat: 'animal',
    dog: 'animal'
};

const newArr = Object.entries(obj);
console.log(newArr);