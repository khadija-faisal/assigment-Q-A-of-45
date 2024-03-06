//Task 44 :
//function for items of sandwiches
function Sandwich(...items : string[]): void {
    console.log("Order Of Sandwich:")

    for(let i = 0; i < items.length; i++){
        console.log(`.${items[i]}`)
    }
}


// Call the function with different numbers of items
Sandwich("lettuce","tomato","egg")
Sandwich("lettuce","chesse","Chicken")
Sandwich("cucmber","mayo sauce","tikka Chicken")

console.log("enjoy your meal!")  