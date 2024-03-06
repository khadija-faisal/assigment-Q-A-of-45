//Task 18
//Using Array for listing fav place names
let favPlaces : string[] = ["SouthKorea", "Turkey", "Dubai","MakkahMadina" ];

//Printing  Array in original order
console.log( "in Original Order",favPlaces);

//Printing Array in Alphabatic order without modifying the orginal Array list
console.log(" Alphabatic order",[...favPlaces].sort());

//checking Array list : is that still in original order?
console.log("still in Original order",favPlaces);

//Printing  Array in reverse order without  modifying the orginal Array list
console.log(" Reverse order",[...favPlaces].reverse());

//checking Array list : is that still in original order?
console.log("still in Original order",favPlaces);

//Printing  Array in reverse order with modifying the orginal Array list
console.log("Original Array in Reverse order",favPlaces.reverse());

//Printing  Array in reverse order to back its orginal Array list
console.log("Reverse back to Original Array",favPlaces.reverse());

//Printing Array in Alphabatic order with modifying the orginal Array list now
console.log(" Alphabatic order",favPlaces.sort());

// Again Printing in reverse order Array list
console.log("Alphabatic Array in Reverse order",favPlaces.reverse());