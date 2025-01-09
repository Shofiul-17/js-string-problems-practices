let first = 5;
let second = 7;
console.log(first, second);


/* // This is wrong approach
first = second;
second = first;
console.log(first, second); */



/* // This is correct approach #1
const temp = first;
first = second;
second = temp;
console.log(first, second); */



// This is correct approach #2
[first, second] = [second, first];
console.log(first, second);



/* let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]


let firstName = "John";
let lastName = "Doe";

// Destructing
[firstName, lastName] = [lastName, firstName];
console.log(firstName, lastName); */