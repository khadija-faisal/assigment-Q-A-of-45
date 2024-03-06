//Task no 30 :
//using array to store usernames
var userNames = ["Admin", "Hira", "Maria", "Sofia", "Afifa"];
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var user = userNames_1[_i];
    if (user === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again."));
    }
}
;
