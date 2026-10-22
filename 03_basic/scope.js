/* 
    why developer not used var in prject ?
    var is not work properly in scope.

    there are 2 types of scope :
    1. functional
    2. global

    var extend value of variable like below program.
*/

var score = 300;
if(true){
    score = 10;
}
console.log(score);


// Prg 2:
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);    // it throw error can't access value of website
    two()

}
one()


// Prg 3:
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    console.log(website);   // it throw error can't access value of website
}
console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// way 1 : it give permission to intialize before creating function.
console.log(addone(5))

function addone(num){
    return num + 1
}


// way 2 : but, it give error like initialize before creating like that.
addTwo(5)
const addTwo = function(num){
    return num + 2
}