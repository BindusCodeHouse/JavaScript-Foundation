// Immediatly Invoked Function Expressions
/*
    why IIFE ?
    some time global scope ke palutions se problem hoti hai kai bar so, us global scope ke varibles hai
    uske palution ko hatane keliye hum IIFE use karte hai. 
    also jo function immidiatly execute ho jaye or usko call na krna pade wo bhi IIFE hai.

    syntax :
    ()()
    in 1st braces we can create function or
    in 2nd braces is execution.

    there are 2 types of IIFE :
    1. named IIFE
    2. unnamed IIFE
*/

// named IIFE : normal function

(function iif() {
    console.log("Hello I am the program of IIFE.");
})();

// !! Important :
/*
    whenever you want to write multiple IIFE then you need to complete function with ';' semicolon 
    otherwise it throw error.
*/

// unnamed IIFE : arrow function
(() => {
    console.log("Hello Iam arrow function.")
})();

// argument function 
((name) => {
    console.log(`Hello ${name}`);
})("Bindu")

