function User(username,password) {
    this._username = username
    this._password = password

    Object.defineProperties(this,{
        username:{
            get: function(){
                return this._username   
            },
            set: function(value){
                this._username = value
            }
        },
        password:{
            get: function(){
                return this._password   
            },
            set: function(value){
                this._password = value
            }
        }
    })
}

const obj = new User("Bindu", "123");
console.log(obj.username, obj.password);