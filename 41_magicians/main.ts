//Task 41

//using array to store magicians names
const showMagicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

//functions for magicians
function magicians(magicianNames: string[]): void {
    console.log("Magicians Names:");
    for(let name of magicianNames){
    console.log(name);
      }
 }

 //calling fuction to print our array of magicians names
magicians(showMagicians)