//Task15
//guest list by using array
let guest : string [] = ["Ayesha","Khadija","Aqsa"];
// storing not attend guest
let notAttend : string = "Ayesha";
// storing new attend guest
let newGuest : string = "Ummekulsoom";
//replace not attend to new
guest [guest.indexOf(notAttend)] = newGuest ;
//printing message and guest those all invited
guest.map((people)=> (console.log(`dear ${people}, you are invited to the dinner`)))
