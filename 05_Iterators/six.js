const coding = ['js','ruby','python','java','swift']

const value = coding.forEach((item)=>{
    // console.log(item);
    return item
    
})

//Note : Foreach doesn't return any value



const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnums = mynums.filter((num) => num>4)
// const newnums = mynums.filter((num) => {
//     return num>4
// })
// Note : if you start a scope {} then you need to give a return value ordered by a return keyword


// const newnums = []
// mynums.forEach((num)=>{
//     if(num>4){
//         newnums.push(num)
//     }
// })
// console.log(newnums);


const book=[
    {title:'book1',author:'author1',id:1},
    {title:'book2',author:'author2',id:2},
    {title:'book3',author:'author6',id:3},
    {title:'book4',author:'author4',id:4},
    {title:'book5',author:'author5',id:5},
    {title:'book6',author:'author6',id:6},
    {title:'book7',author:'author7',id:7},
    {title:'book8',author:'author8',id:8},
    {title:'book9',author:'author6',id:9},
];


// let userbooks = book.filter((bk)=>bk.author == "author6")
let userbooks = book.filter((bk)=>bk.author == "author6").map((bk)=>bk.id)

console.log(userbooks);
