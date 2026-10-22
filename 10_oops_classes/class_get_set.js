class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return `${this._email}`
    }

    set email(value){
        this._email = value
    }
}
const obj = new User("b@gmail.com","123");
console.log(obj.email);
obj.email = "abc@google.com";
console.log(obj.email);


/*
If we can write obj.email = "bindu@gmail.com" directly, then why do we need set email(value)?

    The main reason is to control what happens when someone changes a property's value, such as
    validating the email before saving it.

1. Without a setter ::

    class User {
        constructor(email) {
            this.email = email;
        }
    }

    const obj = new User("bindu@gmail.com");

    obj.email = "hello"; // Allowed
    console.log(obj.email); // hello

The problem is that any value can be assigned, even an invalid email.

2. With a setter ::

    class User {
        constructor(email) {
            this.email = email;
        }

        get email() {
            return this._email;
        }

        set email(value) {
            if (!value.includes("@")) {
                console.log("Invalid email!");
                return;
            }

            this._email = value;
        }
    }

    const obj = new User("bindu@gmail.com");

    obj.email = "hello"; // Invalid email!
    console.log(obj.email); // bindu@gmail.com

    obj.email = "rahul@gmail.com";
    console.log(obj.email); // rahul@gmail.com
*/



