// Task 42
//array to store magicians names
const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Function to add "the Great" to magician names
function make_great(magiciansNames : string[]): string[] {
    const greatMagicians: string[] =
     magiciansNames.map((Names) => `${Names} the great`);
     return greatMagicians;
}

// Call makeGreat to modify the array
const greatMagicianslist = make_great(magicians);


// Print the modified list
console.log("Great magicians Names:");
    for (const Name of greatMagicianslist){
      console.log(Name);
    }



