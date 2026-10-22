/*
    reduce(accumulator, currentvalue),initialValue
    reduce me accumulator first initialValue ko get karta hai. uske bad accumulator ki value
    update hoti rehti hai.
*/
// Prg 1
let myArr = [1,2,3,4,5,6,7,8,9,10];
const sum = myArr.reduce(function (acc,currnt) {
    console.log(`accumulator is: ${acc} and currentValue is: ${currnt}`);
    return acc + currnt;
}, 0);
console.log(sum);


// Prg 2
let obj = [
    {
        prodname:"Apple",
        prize:80000
    },
    {
        prodname:"Galaxy",
        prize:50000
    },
    {
        prodname:"Realme",
        prize:20000
    }
] 

const val = obj.reduce((acc, item) => (acc+item.prize),0)
console.log(val);