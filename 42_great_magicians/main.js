// Task 42
//array to store magicians names
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Function to add "the Great" to magician names
function make_great(magiciansNames) {
    var greatMagicians = magiciansNames.map(function (Names) { return "".concat(Names, " the great"); });
    return greatMagicians;
}
// Call makeGreat to modify the array
var greatMagicianslist = make_great(magicians);
// Print the modified list
console.log(greatMagicianslist);
// for (const Name of greatMagicianslist){
//   console.log(Name);
// }
