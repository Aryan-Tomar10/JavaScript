//foreach


const coding = ['js', 'ruby', 'python', 'java', 'swift']
// coding.forEach(function (val) {
//     console.log(val);
// })

// coding .forEach((item) => {
//     console.log(item);
// });


// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })


const mycoding = [
    {
        languageName : "javascript",
        languagefilename:"js"
    },
    {
        languageName : "ruby",
        languagefilename:"rb"
    },
    {
        languageName : "python",
        languagefilename:"py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageName);
})

