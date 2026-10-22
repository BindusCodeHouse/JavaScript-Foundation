console.log(Math.PI);

//Interview => if i want to change PI value !!

const propertyOfPi = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(propertyOfPi);

const math={
    PI: Math.PI
}
math.PI = 5;
console.log(math.PI);

/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

A non-configurable property cannot be made configurable again. JavaScript protects built-in properties such as 
Math.PI from these kinds of modifications.
so, in short we do not change the value of PI but, if rather then we want then above logic we can use.
*/


// we can change the property of UserDefined Object : because its configurable property is true whereas in PI is False.
const user = {
    name:"bindu",
    age:20,
    isLogined:true,

    greeting: function(){
        console.log(`Hello ${this.name}`);
    }
}

const userProp = Object.getOwnPropertyDescriptor(user, "name");
console.log(userProp);

Object.defineProperty(user,"name",{
    enumerable:false
})

for (const [key,value] of Object.entries(user)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
}
