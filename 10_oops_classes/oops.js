const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// constructor function
/*
We use a constructor function when we need to create multiple objects with the same structure but different data.
For example, imagine you are developing a website where multiple users can register. Every user needs a username, email, and login status.
Instead of creating every object manually, we can use a constructor function. 
*/
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

/*
When to use it:
- When creating multiple similar objects.
- When objects share the same properties and methods.
- When you want reusable object-creation logic. 
*/


/*
2. When do we use a Normal Function?
We use a normal function when we want to perform a particular task or execute some logic. We don't need to create an object every time. 
*/

function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(calculateTotal(100, 3)); // 300
console.log(calculateTotal(200, 2)); // 400

/*
When to use it:
- When performing calculations.
- When validating data.
- When fetching data from an API.
- When performing a task and returning a result. 
*/