let user = {
    name : "Bindu",
    age : 20,
    greeting : function() {
        console.log(`${this.name} Welcome to the arrow function program.`)     
        // if using only name without using this keyword then give ReferenceError: name is not defined.
        // "this" keyword defined current context.
        console.log(this);
    }
}

user.greeting();
user.name = "krishna"
user.greeting()
console.log(this);          // {} empty object


// !! important :
// how work 'this' keyword in Normal function and arrow function ?

// Normal Function
function myFunc() {
    let username = "Bindu";
    console.log(`Hello ${this.username}`);
}

myFunc();

// Normal Function store in variable
let func = function () {
    let username = "Bindu";
    console.log(`Welcome ${this.username}`);
}

func();

// Arrow Function
let funcArrw = () => {
    let username = "Bindu";
    console.log(`Welcome ${this.username}`);
}

funcArrw();


// Explicite return
const add = (no1, no2) => {
    return no1 + no2;
}
console.log(add(20,30));

// implicite return
/* in implicite return we can use '()' also if we want to use object in this then 
   we need to use '({})' otherwise not work it.
   When an arrow function has an expression body without {}, that expression is implicitly returned.
*/
const sum = (num1, num2) => (num1 + num2)
console.log(sum(10,10));

// write object in arrow function 
const usr = () => ({
    usrName : "bindu",
    age : 20
})

console.log(usr());