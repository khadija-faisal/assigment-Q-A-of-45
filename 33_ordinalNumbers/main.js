var ordialNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, ordialNumbers_1 = ordialNumbers; _i < ordialNumbers_1.length; _i++) {
    var number = ordialNumbers_1[_i];
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
;
