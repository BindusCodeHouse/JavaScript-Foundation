let arr = [1,2,3,4,5,6,7,8,9,10];

const myNum = arr
            .map((item)=> item*10)
            .map((item)=> item+1)
            .filter((item)=> item>=50);

console.log(myNum);
