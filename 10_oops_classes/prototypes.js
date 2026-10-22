const obj = {
    name:"Bindu",
    age:20,
    greeting : function(){
        console.log(`Hello ${this.name}`);
    }
}

// console.log(obj.name);
// obj.greeting();

const obj2 = {
    age:30
}

console.log(obj2.name);  // it return undefined because obj2 does not have name properties.

obj2.__proto__ = obj;    // obj2 point to the obj. it check in its own properties if this properties not available then point to allocate object.
console.log(obj2.name);  
console.log(obj2.age);
console.log(obj.age);