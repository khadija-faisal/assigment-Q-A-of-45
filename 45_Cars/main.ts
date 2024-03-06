//Task 45 :

// Define the Car type to represent the car information
type createCar = {
  manufacture: string,
  model: string,
  [features: string]: any;
}
// Function to create a car object
function Car (manufacture: string, model: string, optional: Record<string, any>): createCar{
    console.log(" My Dream Car: ")
    return{
        manufacture,
        model,
        ...optional

    }
}
// required usage
const ourCar : createCar = Car ("Toyota", "Land Cruiser",{color: "black", year:"2024"})
// Print the car object
console.log(ourCar);
