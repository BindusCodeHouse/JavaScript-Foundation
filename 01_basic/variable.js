const accountNo = 1234567890;
let name = "JavaScript";
var age = 20;
city = "Ahmedavad";
let email;

// TypeError: Assignment to constant variable. so, we cannot change value of constant
// accountNo = 5678;  

// we can change value of both var and let then what is the difference ?
/*
    in old javascript one of the problem related scope so, we need to use let eachtime.
    in var there are problem of block scope & functional scope so, each time value of variable
    is change. and without using var & let Javascript support but, we always need to write let 
    or const anything.
*/
name = "Java";
age = 22;
city = "banglore";

console.table([accountNo, name, age, city, email])
