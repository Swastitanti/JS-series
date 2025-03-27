function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");   
}

function createUser(username, email, passward){
    // method to call funtion
    SetUsername.call(this, username)
    this.email = email
    this.passward = passward
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
