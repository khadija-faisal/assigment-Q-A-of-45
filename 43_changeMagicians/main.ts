// Task 43
//array to store magicians names
const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

//Defining a function called showMagicians that prints each magician’s name from the array
function showmagicians(magiciansNames: string[]): void{
    for(const Name of magiciansNames){
     console.log(Name);  
    }
}

//Create a function called makeGreat that adds “the Great” to each magician’s name in a copy of the original array.
function makeGreat(magicianNames: string[]): string[] {
      // Create a copy of the original array and add "the Great" to each name
    const greatMagicians: string[] = magicianNames.map((name) => `${name} the Great`);
    return greatMagicians;

}

// Call the functions and display the results of modified anf orginal magicians
const greaMagicianslist : string[] = makeGreat([...magicians]);
console.log("\nOriginal Magicians Name:");
showmagicians(magicians);

console.log("\nModified Magicians Name:");
showmagicians(greaMagicianslist);