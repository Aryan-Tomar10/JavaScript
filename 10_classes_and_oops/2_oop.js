// const user = {
//     username : 'Aryan',
//     loginCount : 8,
//     signedin : true,
//     getUserDetails : function () {
//         // console.log(`The username is ${this.username}`);
//         console.log(this);
        
//         // return "The Details are shared"
//     }
// }



// console.log(user.loginCount);
// console.log(user['loginCount']);
// console.log(user.getUserDetails());
// console.log(this);




// const user2 = {
//     username : 'Vanya',
//     loginCount : 10,
//     signedin : true,
//     getUserDetails : function () {
//         // console.log(`The username is ${this.username}`);
//         console.log(this);
        
//         // return "The Details are shared"
//     }
// }

//to make new function we need to define the user again and again so to resolve this we need to use constructor function (new)



function user(username,logincount, isloggedin) {
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;
    return this//whether write it or not bcoz it is implicitely defined
}

const user1 = new user("Aryan",12,true) 
const user2 = new user("Vanya",11,false)
console.log(user1);
console.log(user2);

