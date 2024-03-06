var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function Car(manufacture, model, optional) {
    console.log(" My Dream Car: ");
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var ourCar = Car("Toyota", "Land Cruiser", { color: "black", year: "2024" });
console.log(ourCar);
