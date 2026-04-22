//in this we will learn about singleton and using constructor function to create multiple objects

//Singleton

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Aryan"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "aryan@google.com",
    fullname :{
        userfullname : {
            firstname : "Aryan",
            lastname : "Tomar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
//for example if fullname is not available then we will use ternary operator to check if fullname is available or not

const obj1 = {1:'A',2:'B'}
const obj2 = {3:'C',4:'D'}
const obj4 = {5:'C',6:'D'}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4} //spread operator
// console.log(obj3);

const users =[
    {
        id:1,
        email:"aryan@google.com"
    },
    {
        id:2,
        email:"aryan@google.com"
    },
    {
        id:3,
        email:"aryan@google.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
