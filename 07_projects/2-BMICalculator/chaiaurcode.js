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
        
        const ranges = document.querySelectorAll('#weight-guide p');
        let value = '';

        // console.log(ranges);
        ranges.forEach(function(range){
            if(bmi >= 10 && bmi < 18.5){
                value = ranges[0].textContent
                // console.log(value);
            }else if(bmi >= 18.5 && bmi < 25){
                value = ranges[1].textContent
                // console.log(value);
            }else{
                value = ranges[2].textContent
                // console.log(value);
            }
        })
        results.innerHTML = `<span>${bmi} and catagory is ${value}</span>`;
    }
});