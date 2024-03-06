//Task 37

//create funtion modify tshirt size and message
function makeShirt(size: string = 'Large', text: string = 'I love typescript.'): void {
    console.log(` you ordererd a ${size} shirt thats ${text}`)
}
//printing default and customize size and a message 
makeShirt();
makeShirt('Medium');
makeShirt('Small','learning typescript is fun.');