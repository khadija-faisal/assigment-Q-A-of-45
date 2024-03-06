// Task 38

//writing  a function that store default country with different cites 
function describeCity (city: string, country : string = "Pakistan"): void{
    console.log(`${city} is in ${country}.`)
};

//printing different cities names with default country one is not with default country
 describeCity('Karachi');
 describeCity('Isalamabad');
 describeCity('Tokyo','japan');
