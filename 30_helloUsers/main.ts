//Task no 30 :
//using array to store usernames
let userNames : string[] = ["Admin", "Hira", "Maria", "Sofia", "Afifa"];

//using for loop with if else chain to send messages to all users
for (let user of  userNames ){
    if(user === "Admin"){
        console.log("Hello Admin, would you like to see a status report?")
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
};