// with Classes Implement

class MyClass{
    constructor(username,age,password){
        this.username = username;
        this.age = age;
        this.password = password;
    }

    encryptPassword(){
        return `#@$${this.password}987`;
    }
}

const obj = new MyClass("Bindu",20,"bindu");
console.log(obj.encryptPassword());


// without Classes how to Implement

function User(username,age,password){
    this.username = username;
    this.age = age;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `#@$${this.password}987`;
}

const newObj = new User("Bindu",20,"bindu");
console.log(newObj.encryptPassword());
