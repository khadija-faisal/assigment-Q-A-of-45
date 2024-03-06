//Task35:
//store animal names bu using Array
var animals = ["Dog", "Goat", "Cow"];
//using for loop with if else chain for printing simpla characterisitic of each animal 
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    if (animal.includes("Goat")) {
        console.log("A Goat milk is a main source of milk for humans. ");
    }
    else if (animal.includes("Dog")) {
        console.log("A dog would make a great pet. ");
    }
    else {
        console.log("A Cow gives alot of benefits to humans.");
    }
}
;
//ending program with this simple sentance print bu using console.log
console.log("Any of these animals would make a great pet!");
