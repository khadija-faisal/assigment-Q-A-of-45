// //Task 32 :

// //store current users names by using Array
let currentUsers : string[] = ["Khadija", "Hira", "maria", "Sofia", "Afifa"];

//store New users names by using Array
let newUsers : string [] = ["Laiba","Sara","Maria","Faiza","Hira"];

let currentusersLower : string[] = currentUsers.map(user => user.toLowerCase());
//using for loop and if else chain send different message to new users if the name of users is same to current users that print special message other for same meessage
for(let newUser of newUsers ) {
    if (currentusersLower.includes(newUser.toLowerCase())) {
        console.log(`This username ${newUser}, is unavailable you will need to enter a new username`)
    } else{
        console.log(`"${newUser}", is available`)
    }
};

 