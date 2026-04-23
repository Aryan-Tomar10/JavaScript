//Nested Scope

function one(){
    const username ="Aryan"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    // two()
}
// one()

if(true){
    const username ="Aryan"
    if (username === "Aryan") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// +++++++++++++++++ INTERESTING ++++++++++++++++++++

function addone(num){
    return num+1
}

addTwo(5)

const addTwo = function(num){
    return num+2
}

addone(5)