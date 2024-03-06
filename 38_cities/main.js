//writing  a function that store default country with different cites 
function describeCity(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
;
//printing different cities names with default country one is not with default country
describeCity('Karachi');
describeCity('Isalamabad');
describeCity('Tokyo', ' japan');
