//interface of object
interface student{
    fullName : string ;
    age : number ;
    cgpa : number ;
    isPass : boolean ;
};

// student identity by using object
const student = {
    fullName : "Khadija",
    age : 19,
    cgpa : 8.2,
    isPass : true,
};

// printing object 
console.log(student);
console.log(typeof(student));