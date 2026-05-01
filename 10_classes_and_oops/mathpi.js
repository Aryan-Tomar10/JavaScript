// const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')


// // console.log(Math.PI);
// // Math.PI = 5
// // console.log(Math.PI);


// console.log(descriptor);
const chai  = {
    name:'ginger chai',
    price : 250,
    isAvailable : true,

    orderchai : function(){
        console.log("chai nhi bni");
        
    }
}

// console.log(chai);

// console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
    writable : false,
    enumerable : true,
    // configurable : false
})
// // console.log(Object.getOwnPropertyDescriptor(chai,'name'));


// console.log(chai);


for (const [key,value] of Object.entries(chai)) {
    if (typeof value !== "function"){
        console.log(`${key} : ${value}`);
    }
    
}