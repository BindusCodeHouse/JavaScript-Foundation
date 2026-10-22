// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// here, javascript convert 2 into number so, return true.
// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);      // false
console.log(null == 0);     // false
console.log(null >= 0);     // true
/* 
    null >= 0 return true because javascript convert null into 0 so, 0 = 0 thats why it return true. and 
    sometime it convert null into Nan so, we don't put faith on that.
    we do not use that type of comparison in our code because it increase complexity. 
*/


console.log(undefined == 0);    // false
console.log(undefined > 0);     // false
console.log(undefined < 0);     // false
console.log(undefined >= 0);    // false

// === it is called strict comparison it check datatype also
console.log("2" === 2);