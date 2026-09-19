const name = "bindu"
const repoCount = 4

// use `` sign for define variable in console otherwise not print variable value.
console.log(`my name is ${name} and my repocount is ${repoCount}.`)


const gameName = new String('bindu-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   bindu    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://bindu.com/bindu%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'));
