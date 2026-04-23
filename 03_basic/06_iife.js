//Immediately Invoked Function Expressions (IIFE)

//to invoke the function by function call
// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai();


//to invoke the function immediately after its formation
// we use this to remove the pollution caused by global operator
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//anonymous/Unnamed IIFE
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})("Aryan")