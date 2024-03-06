// Task 24
//variable 1
let a : number = 45 ;
//variable 2
let b : number = 32 ;

//Test 1
// testing condition by using comparison operator and printing answer in bolean data type
console.log("is 'a' greater then 'b' =", a > b);

//Test 2
// testing condition by using comparison operator and printing answer in bolean data type
console.log("is 'a' equal to 45 =", a === 45);

//Test 3
// testing condition by using logical operator and printing answer in bolean data type
console.log( "is 'a' is unequal to 'b' and 'b' is less 'a' = ",a !== b || b < a);

//Test 4
// testing condition by using comparison operator and printing answer in bolean data type
console.log ("is (a+b) is greaterthen (a-b) =",a + b > a - b);


// variable 3
let c : number =  2 ;
// variable 4
let d : number = 11 ;

//Test 5
// testing condition by using comparison operator and printing answer in bolean data type
console.log("is (a/b) equal to (d*c)=",c / d !== d * c );

//Test 6
// testing condition by using comparison operator and printing answer in bolean data type
let cond1 = d ** c ;
let cond2 = c ** d ;
console.log("is cond1 is equal to cond2 =",cond1 === cond2);

//Test 7
// testing condition by using comparison operator and printing answer in bolean data type
let cond3 = d * c + d
let cond4 = d / c + d
console.log("is cond3 is less then cond4 =",cond3 <= cond4);


// variable 5
let e = 5 ;
// variable 6
let g = 9


//Test 8
// testing condition by using logical and  comparison operator and printing answer in bolean data type 
console.log("is 'a' is equal to 'b'=",a == b && a === b);
 
//Test 9
// testing condition by using logical and comparison  operator and printing answer in bolean data type 
console.log("is !(e !== g) =",!(e !== g));

//Test 10
// testing condition by using comparison operator and printing answer in bolean data type
console.log("is (e/g+e) equal to (e/g-e)=",e/g+e == e/g-e);

//Test 11
// testing condition by using ternary operator
let age = 19 ;
let j = age > 18 ? "Adult" : "notAdult";
console.log(j) ;

//Test 12
// testing condition by using if and else
let age1 = 16 ;
if(age1 > 18){
    console.log("you can vote")
} else{
    console.log("you cannot vote")
};

//Test 13
//testing condition by using if and else
let mode = "dark" ;
if (mode = "dark"){
   console.log("black")
} else {
    console.log("white")
};

//Test 14
//testing condition by using if and else if
let Age = 65 ;
if(Age <= 18){
    console.log("Teenger")
} else if(Age <= 40 ){
    console.log("Adult")
} else if(Age > 60 ){
    console.log("Old")
};




