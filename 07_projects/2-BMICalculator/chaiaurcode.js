// const height = document.getElementById("height");
// const weight = document.getElementById("weight");

// const calculate = document.querySelector('button');
// // console.log(calculate);

// calculate.addEventListener('click', function(e){
//     console.log(e.target);
// })


const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please Give a valid Height`;
    }
    // results.innerHTML = `${height}`;
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please Give a valid weight`;
    }
    // results.innerHTML = `${weight}`;
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
})

