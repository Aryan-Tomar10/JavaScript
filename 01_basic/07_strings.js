let FullName = "Aryan";
const repocount = 50;

console.log(`Hello my name is ${FullName} and my repo count is ${repocount}`);


const gameName = new String("lorem-hc.com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);
// console.log(gameName.toLowerCase());
// console.log(gameName.indexOf("o"));
console.log(gameName.slice(0, 3));
console.log(gameName.slice(2));
console.log(gameName.replace("o", "a"));


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.substr(-2, 3);
console.log(anotherString);

const newString2 = "    aryan.     ";
console.log(newString2.trim());


const url = "https://www.youtube.com/watch%20?v=abc123";

console.log(url.replace('%20','-'));
console.log(url.includes("abc13"));


console.log(gameName.split("-"));