// let a = 10
// const b = 20
// var c = 30

let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30 //we should avoid to use var as it act as global variable inside the scope also 

    console.log("INNER : ", a);
    
}

// console.log(a);
// console.log(b);
console.log("OUTER",a);
