var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Task 18
//Using Array for listing fav place names
var favPlaces = ["SouthKorea", "Turkey", "Dubai", "MakkahMadina"];
//Printing  Array in original order
console.log("in Original Order", favPlaces);
//Printing Array in Alphabatic order without modifying the orginal Array list
console.log(" Alphabatic order", __spreadArray([], favPlaces, true).sort());
//checking Array list : is that still in original order?
console.log("still in Original order", favPlaces);
//Printing  Array in reverse order without  modifying the orginal Array list
console.log(" Reverse order", __spreadArray([], favPlaces, true).reverse());
//checking Array list : is that still in original order?
console.log("still in Original order", favPlaces);
//Printing  Array in reverse order with modifying the orginal Array list
console.log("Original Array in Reverse order", favPlaces.reverse());
//Printing  Array in reverse order to back its orginal Array list
console.log("Reverse back to Original Array", favPlaces.reverse());
//Printing Array in Alphabatic order with modifying the orginal Array list now
console.log(" Alphabatic order", favPlaces.sort());
// Again Printing in reverse order Array list
console.log("Alphabatic Array in Reverse order", favPlaces.reverse());
