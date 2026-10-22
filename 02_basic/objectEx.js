let user = {
    name : "Bindu",
    age : 20,
    email : "abc@demo.com"
}

// CRUD Operation in Object

// Read :
console.log(typeof user);
console.log(user);
console.log(user["name"])
console.log(user.age);

// Update :
user.age = 30;
console.log(user);

// Delete :
delete user.email;
console.log(user)


let emp = {
    name : "Bindu",
    age : 20,
    email : "abc@demo.com"
}

// Find Keys, value & pair of Object
console.log(Object.keys(emp));
console.log(Object.values(emp));
console.log(Object.entries(emp));

// using for loop we can get list of data one by one.
for(let key in emp){
    console.log(key,":",emp[key]);
}


// object Distructing 
let animal = {
    name : "Cow",
    food : "grass"
}

const {name, food} = animal
console.log(name,food);
//rename variable like after renaming you can access value
const {name:animalname, food:animalFood} = animal
console.log(animalname,animalFood);


// Symbol create in object 
/*
    we can create Symbol like this if we want to add symbol in object. and access like that. 
*/

let mySym = Symbol("value") 
let usr = {
    name : "Bindu",
    [mySym] : "Symbol Value",
    greeting : function() {
        console.log(`Hello my name is ${this.name}`)
    }
}

console.log(usr);
console.log(usr[mySym])
usr.greeting();


// assign Object in 2 way :

let obj1 = {a: "1", b: "2"}
let obj2 = {c: "3", d: "4"}

/*
    way_1 :: using assign function 
    .assign(targrt,source)
    target = {} & source = obj1,obj2 ...

    it means in empty object all record is save otherwise in obj1 all record is save in memory so, in production code mostly
    used paremthesis {}.
*/

let obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

// way_2 :: using spreding
let obj4 = {...obj1, ...obj2}
console.log(obj4);


// Destructuring Object :
let employee = {
    "name": "krishna",
    "age":20,
    "email":"kr@gmail.com"
} 

const {name : nm } = employee
console.log(nm)


// !!important ::
/*
    what is the global object in browser ?
    window is the global object.
*/