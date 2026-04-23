// const user = {
//     username:"aryan",
//     price:999,
//     welcomeMessage: function(){
//         console.log(`${this.username} welcome to web`);//this is used to point to currect context
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username="Aryan"
//     console.log(this.username);
// }

// chai()



// const chai = function(){
//     let username="Aryan"
//     console.log(this.username);
// }


const chai = () => {
    let username="Aryan"
    console.log(this);
}


// chai()

//Arrow Function

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

//Implicit return
// const addTwo = (num1,num2)=> (num1+num2)


const addTwo = (num1,num2)=> ({username : "aryan"})

console.log(addTwo(2,3));
