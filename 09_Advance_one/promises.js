// fetch('').then().catch().finally()

const promise1 = new Promise(function (resolve, reject) {
    //Do an async task
    //do calls, cryptography, network
    setTimeout(function() {
        console.log('Async task id completed');
        resolve();//if we will not write this resolve then promise will not be consumed to to integerate with then we use resolve 
    }, 1000)
})

promise1.then(function () {
    console.log('promise consumed');
})


new Promise(function (resolve,reject) {
    setTimeout(() => {
        console.log('Async task 2');
        resolve();
    }, 1000);
}).then(function () {
    console.log('Async 2 resolved');
})



const promise3 = new Promise(function (resolve,reject) {
    setTimeout(function() {
        resolve({username: 'chai', email:'aryan@google.com'});
    }, 1000);
})

promise3.then(function (user) {
    console.log(user);
})




//promise4 and promise5 are 2 variation of code both give same output but use different approach
const promise4 = new Promise(function (resolve,reject) {
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username: 'Aryan', password: '123'})
        }
        else{
            reject('Error occured');
        }
    }, 1000);
})

const username = promise4
.then((user) => {
    // console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");  
})





const promise5 = new Promise(function (resolve,reject) {
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username: 'JavaScript', password: '123'})
        }
        else{
            reject('Error: JS went wrong');
        }
    }, 1000);
})

async function consumePromise5(){
    // const response = await promise5
    // console.log(response);
    
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);   
    }
}

consumePromise5()



// async function getallusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json() //to convert data to json we need to use await as it takes time 
//         console.log(data);
//     } catch (error) {
//         console.log('E : ', error);
//     }
// }

// getallusers();



fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})