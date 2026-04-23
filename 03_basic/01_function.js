// console.log('A');
// console.log('R');
// console.log('Y');
// console.log('A');
// console.log('N'); 


function sayMyName(){
    //write tthe above code here
    console.log('A');
    console.log('R');
    console.log('Y');
    console.log('A');
    console.log('N');
}

// sayMyName()


// function addTwoNumbers(num1, num2){ //here num1 and num2 are parameters
//     console.log(num1+num2);
// }

// addTwoNumbers(3, null) //here 3 and null are arguments


function addTwoNumbers(num1, num2){ //here num1 and num2 are parameters
    // let result = num1 + num2
    // return result
    // console.log("This will not be printed") //this line will not be executed because it is after return statement
    return num1 + num2
}


const result = addTwoNumbers(3, 4)

// console.log("result is : ",result)


function loginUsermessage(username = "sam"){//here we are giving default value to username parameter, if we do not pass any argument then it will take default value
    // if(username === undefined){
    if (!username) { //this will check for both undefined and empty string
        console.log("Please enter username");
        return
    }
    return`${username} is logged in successfully`
}

console.log(loginUsermessage());