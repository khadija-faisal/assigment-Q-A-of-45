//Task 16
//list of guests
var guest = ["Ayesha", "Khadija", "Aqsa", "Rehmat"];
//Adding newGuest in the start of your guest list
var newGuest = "Ummekulsoom";
guest.unshift(newGuest);
//Adding newGuest in the Middle of your guest list
var middleGuest = "Roshan";
var middleindex = guest.length / 1;
guest.splice(middleindex, 1, middleGuest);
//Adding newGuest in the end of your guest list
guest.push("Saba");
console.log(guest);
guest.map(function (people) { return console.log("Dear! ".concat(people, ",I found a bigger table so i invited more peoples.")); });
