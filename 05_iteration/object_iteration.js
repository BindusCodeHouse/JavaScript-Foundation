// Prg 1 :

const obj = {
    name : "Bindu",
    age : 20,
    city : "ahmedabad" 
}

for(let key in obj) {
    console.log(`${key} : ${obj[key]}`);
}

// Prg 2 :
/*
    when we use for in loop in array then it return index because in memory it store value with 
    index. if we want to get value of arr then we need to print "programming[value]".
*/
const programming = ["Java", "Python", "JavaScript"];
for(let value in programming) {
    console.log(value);
}

