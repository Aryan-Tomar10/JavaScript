const course ={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"hitesh choudhary",
    courseInstructorEmail:"Aryan@google.com"
}


//course.courseInstructor

const {courseInstructor:instructor, courseInstructorEmail:email, coursename, price} = course

console.log(instructor);
console.log(email);
console.log(coursename);
console.log(price);
console.log(course);

//Object is a collection of key value pairs JSON format
// {
//     "name": "Aryan",
//     "age": 20,
//     "email": "aryan@google.com",
// }



//Array of objects
// [
//     {},
//     {},
//     {},
// ]