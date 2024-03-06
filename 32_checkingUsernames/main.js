// //Task 32 :
// //store current users names by using Array
var currentUsers = ["Khadija", "Hira", "maria", "Sofia", "Afifa"];
//store New users names by using Array
var newUsers = ["Laiba", "Sara", "Maria", "Faiza", "Hira"];
var currentusersLower = currentUsers.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    if (currentusersLower.includes(newUser.toLowerCase())) {
        console.log("This username ".concat(newUser, ", is unavailable you will need to enter a new username"));
    }
    else {
        console.log("\"".concat(newUser, "\", is available"));
    }
}
;
