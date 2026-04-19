let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);


// let mycreatedDate = new Date(2022, 0, 1);
// let mycreatedDate = new Date(2023,11,13,13,23,43,55);
let mycreatedDate = new Date('2025-12-10');

// console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(mycreatedDate.getTime()/1000));



let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{weekday:"long", timeZone:"UTC"}));
