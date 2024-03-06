//Task 16
//list of guests
let guest : string [] = ["Ayesha","Khadija","Aqsa","Rehmat"];

//Adding newGuest in the start of your guest list
let newGuest : string = "Ummekulsoom";
guest.unshift(newGuest);

//Adding newGuest in the Middle of your guest list
let middleGuest : string = "Roshan";
let middleindex = guest.length/1
 guest.splice(middleindex,1,middleGuest);

//Adding newGuest in the end of your guest list
 guest.push("Saba");

 //printing a new list of guest
 console.log(guest);
 
 //printing meassge to new guest list for huge Dinner
 guest.map((people) => console.log(`Dear! ${people},I found a bigger table so i invited more peoples.`));
