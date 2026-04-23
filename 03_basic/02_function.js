// function calculatorCartPrice(num1){
//     return num1
// }
function calculatorCartPrice(...num1) {
  // this is rest operator, it will take all the arguments and put them in an array called num1
  return num1;
}

// console.log(calculatorCartPrice(200,400,500))

const user = {
  username: "sam",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and the price is ${anyobject.price}`,
  );
}

// handleObject(user)
handleObject({ 
    username: "sam", 
    price: 1200 
})


const myNewArray = [200,400,100,600]

function returnSecondValue(getarray){
    return getarray[1]
}

console.log(returnSecondValue(myNewArray));

