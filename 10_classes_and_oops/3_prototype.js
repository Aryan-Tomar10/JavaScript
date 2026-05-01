// let name = "Aryan"
// let name2 = "Saloni.    "

// console.log(name.length);
// console.log(name2.length);

// console.log(name.truelength);

let A=[1,2,3,4]


let myhero = {
    thor : 'Hammer',
    spiderman : 'sling',
    getSpiderPower : function () {
        console.log(`Spider power is : ${this.spiderman}`);        
    }
}
//this is how we can make function for objects
Object.prototype.Aryan = function () {
    console.log('Aryan is presend in all objects');
    
}


//this is how we can make function for Array
Array.prototype.heyAryan = function () {
    console.log("This function is made by Aryan");
}

myhero.getSpiderPower()
myhero.Aryan()
A.heyAryan()



const user = {
    name : 'Aryan',
    email : 'aryan@google.com'
}


const Teacher = {
    makeVideo : true
}

const TeacherSupport = {
    isavailable : false
}

// this is old structure
// const TASupport = {
//     makeAssignment : 'JS assignment',
//     fulltime : true
//     __proto__ : TeacherSupport
// }

// Teacher.__proto__ = user

//modern Structure
const TASupport = {
    makeAssignment : 'JS assignment',
    fulltime : true
}
//encapsulation
Object.setPrototypeOf(TeacherSupport,Teacher)
console.log(TeacherSupport.isavailable);

console.log(Object.getPrototypeOf(TeacherSupport));





let anotherUsername = 'AryanTomar.    '

String.prototype.truelength = function () {
    // console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
    return this.trim().length
}

anotherUsername.truelength()
' '.truelength()

