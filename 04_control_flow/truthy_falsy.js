/*
    truthy value :
    true, [], {}, " ", 'false', "0", function(){}

    falsy value :
    false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/

let userEmail = [];
if(userEmail.length === 0) {
    console.log("Array is empty");
}

let emptyObj = {};
if(Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}


// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")