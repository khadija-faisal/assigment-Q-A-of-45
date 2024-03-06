function makeShirt(size, text) {
    if (size === void 0) { size = 'Large'; }
    if (text === void 0) { text = 'I love typescript.'; }
    console.log(" you ordererd a ".concat(size, " shirt thats ").concat(text));
}
//printing a siza and a message on shirt
makeShirt();
makeShirt('Medium');
makeShirt('Small', 'learning typescript is fun.');
