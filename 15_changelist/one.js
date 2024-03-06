//Task15
var guest = ["Ayesha", "Khadija", "Aqsa"];
var notAttend = "Ayesha";
var newGuest = "Ummekulsoom";
guest[guest.indexOf(notAttend)] = newGuest;
guest.map(function (people) { return (console.log("dear ".concat(people, ", you are invited to the dinner"))); });
