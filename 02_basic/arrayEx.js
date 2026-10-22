/*
    in javascript we can store list of different types of data in array.
    array support different types of data.

    in array if we sort the data then it srt data based on ascii value like,
    for example :
    [101,35,25,11,40,98]  --- sort --- [ 101, 11, 25, 35, 40, 98 ]  
    ["apple","Cherry","Mango"] --- sort --- ["Cherry","Mango","apple"]  because A = 65 & a = 97

    javascript give this rules because array support different types of data so, whenever in array have 
    mix types of data then how do sort for thats why it sort  all array based on ascii value.

*/

let arr = [101,35,25,11,40,98]
arr.sort()
console.log(arr)


/* 
    if you want to sort only number value then you can use one formula : 
    (a,b) => a - b    ----> Ascending
    (a,b) => b - a    ----> Descending

    arr.sort((a,b) => a - b)
*/


/*
    in javascript why array is not array ?
    because, array is store same types of data and all data has assign same memory.
    whereas, in javascript array store different type of data so, all data has diffferent assign memory.
    so, in javascript array is not array it is object.

    same, in python list is not array. it is work same like javascript
*/
