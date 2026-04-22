// singleton
// Object.create


//object literal
//this way we can use Symbol to create a unique key for the object, it is used to create a unique property for the object, it is not enumerable, it is not iterable, it is not accessible using dot notation, it is only accessible using bracket notation
const mySym = Symbol("key1")

const jsUser ={
    name: "Aryan",
    age: 20,
    [mySym]: "myValue",
    location: "Delhi",
    email: "aryan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}

//this is not good way to call the properties of an object
// console.log(jsUser.name)
// console.log(jsUser.age)
// console.log(jsUser.location)
// console.log(jsUser.email)
// console.log(jsUser.isLoggedIn)
// console.log(jsUser.lastLoginDays)

// this is also one of the way to call the properties of an object, it is called bracket notation, it is used when we want to access the properties of an object using a variable
// console.log(jsUser["name"])
// console.log(jsUser[mySym])
// console.log(jsUser);

//Freeze operator is used to make the object immutable, it will not allow to change the properties of the object
// jsUser.age=21
// Object.freeze(jsUser)
// jsUser.age=22 
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
} 

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
//this is how we access the index of an array
// myArray = ['A', 'T']
// myArray[1]