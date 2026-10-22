// print Table 
for(let i=11; i<=20; i++){
    for(let j=1; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}


// access array value
const arr = ["apple","mango","cherry","graps"]
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
} 

/*
    in this program use '<' because array index start with 0.
    if <= use kare to javascript me out of bound nahi milta but, undefined return kar deta hai.
*/


for(let i=11; i<=20; i++){
    if(i==13){
        console.log("Detected 13");
        break;
    }
    console.log(i);
}
