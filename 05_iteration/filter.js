arr = [1,2,3,4,5,6,7,8,9,10];
const even = arr.filter((item) => {return item%2 == 0})
console.log(even);


// using forEach :
let val = [1,2,3,4,5,6,7,8,9,10];
val.forEach((num) => {
    if(num%2==0) {
        console.log(num);
    }
})