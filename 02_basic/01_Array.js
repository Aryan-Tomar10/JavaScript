// array

const myArray = [0,1,2,3,4,5]
const myHeros = ['Batman', 'Superman', 'Spiderman']

const myarr2 = new Array(1,2,3,4,5)

// console.log(myArray);



//Array Methods

// push
// myArray.push(6)
// myArray.push(7)
// console.log(myArray);

// pop
// myArray.pop()
// console.log(myArray);

// unshift 
// myArray.unshift(9)
// console.log(myArray);

// shift
// myArray.shift()
// console.log(myArray);



// console.log(myArray.includes(9));
// console.log(myArray.indexOf(4));

// const newArr = myArray.join()

// console.log(typeof newArr);
// console.log(myArray);



// slice, splice

console.log("A", myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B", myArray);


const myn2 = myArray.splice(1,3)
console.log("C", myArray);
console.log(myn2);
