const marvel_heros = ["thor", "ironman", "spiderman"]
const dc = ["superman", "batman", "flash"]

// marvel_heros.push(dc)
// console.log(marvel_heros);

//Concat Operator
// const allHeros = marvel_heros.concat(dc)
// console.log(allHeros);

// Spread Operator
// const all_New_Heros = [...marvel_heros, ...dc]
// console.log(all_New_Heros);



const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array =  another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("another"))
console.log(Array.from("another"))
console.log(Array.from({name : "another"})) //interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
