// Using Task 16 for Task 17
// /list of guests
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
//printing a new list of guest
//console.log(guest);
//printing meassge to new guest list for huge Dinner
//guest.map((people) => console.log(`Dear! ${people},I found a huge table so i invited more peoples.`));
//  Task 17
//Informing that i can invite only two people
console.log("due to unavailability of huge table, only two people can be invited for dinner ");
//Using while for removing guest untill two remains
while (guest.length > 2) {
    var removeGuest = guest.pop();
    console.log("Extremely Sorry ".concat(removeGuest, ", I can't invited to dinner."));
}
//Again using WHILE loop to invite 2 remains guest (method 1)
//while(guest.length < 2){
//console.log(`Dear ${guest}, you are still invited to dinner.`);
//}
//inivting 2 remain guest by second method (method 2)
guest.map(function (people) { return console.log("Luckly! ".concat(people, ", you are still invited to dinner.")); });
//Removing remain guest from the array
guest.pop();
guest.pop();
//printing empty list
console.log(guest);
