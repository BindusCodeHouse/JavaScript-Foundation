// postfix

let x = 3;
const y = x++;

console.log(x,y);      // x is 4; y is 3

let x2 = 3n;
const y2 = x2++;

console.log(x2,y2)     // x2 is 4n; y2 is 3n



// prefix

let x3 = 3;
const y3 = ++x3;

console.log(x3,y3);      // x3 is 4; y3 is 4

let x4 = 3n;
const y4 = ++x4;

console.log(x4,y4)       // x4 is 4n; y4 is 4n