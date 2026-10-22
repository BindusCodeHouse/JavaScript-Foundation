// add Two Number
function addTwoNumber(num1,num2){   // num1-num2 is parameter
    console.log(num1 + num2);
}

addTwoNumber(10,"30")   // 1030   // values are arguments
addTwoNumber(10,30)     // 40
addTwoNumber(10,null)   // 10
addTwoNumber(10,true)   // 11
addTwoNumber(10,false)  // 10


// return value in function 
function returnValue(no1,no2){
    return no1 + no2;
}

let no3 = returnValue(10,20);
console.log(no3);


// !! Important :
// if we not pass value in function call then what happen ?

function sumVal(n1,n2){
    return `sum is : ${n1 + n2}`;
}

console.log(sumVal());    // sum is : NaN 


// !! Important
/*
    what is the difference between spread & REST operator ?
    spread & REST both are write same like "..." sign with variable name
    but, Spread is spread the value where as, REST combine the value. 
*/

// REST
// Prg 1 :
function myFunc(name, ...subject){
    console.log(`your name is: ${name}`);
    console.log(`your subject is: ${subject}`)
}

myFunc("Bindu","C","JAVA","Python");

// Prg 2 :
function student(name, ...subjects) {
    console.log(name);
    console.log(subjects);
}

student("Bindu", "Java", "Spring Boot", "MongoDB");

/*
    both above program give different output like one by one "your subject is: C,JAVA,Python" & 
    "[ 'Java', 'Spring Boot', 'MongoDB' ]" because, both printing style is different if we declare any object in `` then 
    javascript convert that object into string so, 1st program give subject without [] braces.
*/

// Spread

myArray = [10,20,30]
console.log(...myArray);

