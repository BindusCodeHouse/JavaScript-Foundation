let today = new Date()

console.log(today)  // return UTC [ universal cordinated time ]
console.log(today.toISOString())  // return UTC [ universal cordinated time ]
console.log(today.toString())       // return local time in IST time formate
console.log(today.toLocaleString())  // return local date & time

/*
    Day index start with 0 - sunday, 1 - monday....
    Month index start with 0 - January , 1 - february....
*/
console.log(today.getDate())
console.log(today.getDay())
console.log(today.getMonth())



let now = Date.now()    // return miliseconds from 1 jan. 1970 to today
console.log(now);
const dates = new Date(now);    // return UTC based on passed miliseconds
console.log(dates)

/*
    in Real Project Backend Developer always save UTC time in database and after that based on user
    requirement convert into different time zone. so, different countries user get thier own time in UI.
*/ 


// we can pass specific date & time in argument
const td = new Date(2026,9,20,10,30,0,123);
console.log(td.toString());