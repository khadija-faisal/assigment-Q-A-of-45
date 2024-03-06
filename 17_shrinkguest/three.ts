// Using Task 16 for Task 17
// /list of guests
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
 //console.log(guest);
 
 //printing meassge to new guest list for huge Dinner
 //guest.map((people) => console.log(`Dear! ${people},I found a huge table so i invited more peoples.`));


 //  Task 17
 //Informing that i can invite only two people
 console.log("due to unavailability of huge table, only two people can be invited for dinner ");
 
 //Using while for removing guest untill two remains
 while(guest.length > 2){ 
    let removeGuest = guest.pop();
    console.log(`Extremely Sorry ${removeGuest}, I can't invited to dinner.`);
 }

//Again using WHILE loop to invite 2 remains guest (method 1)
 //while(guest.length < 2){
    //console.log(`Dear ${guest}, you are still invited to dinner.`);
 //}

 //inivting 2 remain guest by second method (method 2)
guest.map((people) => console.log(`Luckly! ${people}, you are still invited to dinner.`));

//Removing remain guest from the array
 guest.pop();
 guest.pop();

//printing empty list
 console.log(guest);