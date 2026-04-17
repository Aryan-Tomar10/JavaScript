// Stack(Primitive) , Heap(Non-Primitive)

let myYoutubeName = "Codevolution"
let anotherYoutubeName = myYoutubeName

// console.log(myYoutubeName);
// console.log(anotherYoutubeName);

anotherYoutubeName = "Codevolution Channel"

console.log(myYoutubeName);
console.log(anotherYoutubeName);


let userone={
    email:"user@gmail.com",
    upi:"user@okaxis"
}

let usertwo = userone


usertwo.email = "user2@gmail.com"

console.log(userone.email);
console.log(usertwo.email);
