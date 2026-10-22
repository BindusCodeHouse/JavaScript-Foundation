/*
Explain call & this in JavaScript.

call() is a JavaScript method that invokes a function immediately and allows us to explicitly set the value of 
this. In my example, SetUserName.call(this, username) reuses the SetUserName function and assigns the username to 
the same object created by the callMe constructor. This allows both functions to initialize properties on one 
object."
Remember: call() does not create a new object. The new keyword creates the object, while call() lets another 
function work with that same object. 
*/

function SetUserName(username){
    this.username = username;
}

function callMe(username,email,password){
    SetUserName.call(this,username);
    this.email = email;
    this.password = password;
}

const user = new callMe("Bindu","bindu@gmail.com","123456");
console.log(user);