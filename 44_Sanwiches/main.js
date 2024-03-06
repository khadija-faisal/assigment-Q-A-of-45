//Task 44 :
function Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Order Of Sandwich:");
    for (var i = 0; i < items.length; i++) {
        console.log(".".concat(items[i]));
    }
}
Sandwich("lettuce", "tomato", "egg");
Sandwich("lettuce", "chesse", "Chicken");
Sandwich("cucmber", "mayo sauce", "tikka Chicken");
console.log("enjoy your meal!");
