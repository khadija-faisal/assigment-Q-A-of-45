var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Task 43
//array to store magicians names
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
//Defining a function called showMagicians that prints each magician’s name from the array
function showmagicians(magiciansNames) {
    for (var _i = 0, magiciansNames_1 = magiciansNames; _i < magiciansNames_1.length; _i++) {
        var Name = magiciansNames_1[_i];
        console.log(Name);
    }
}
//Create a function called makeGreat that adds “the Great” to each magician’s name in a copy of the original array.
function makeGreat(magicianNames) {
    // Create a copy of the original array and add "the Great" to each name
    var greatMagicians = magicianNames.map(function (name) { return "".concat(name, " the Great"); });
    return greatMagicians;
}
// Call the functions and display the results of modified anf orginal magicians
var greaMagicianslist = makeGreat(__spreadArray([], magicians, true));
console.log("\nOriginal Magicians Name:");
showmagicians(magicians);
console.log("\nModified Magicians Name:");
showmagicians(greaMagicianslist);
