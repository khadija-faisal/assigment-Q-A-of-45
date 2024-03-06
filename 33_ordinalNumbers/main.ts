//Task 33

//store numbers by using array
let ordialNumbers : number[] = [1,2,3,4,5,6,7,8,9];

//using for loop and if else chain print oridinal numbers
for (let number of ordialNumbers) {
    if(number === 1){
        console.log(`${number}st`)
    } else if (number === 2){
        console.log(`${number}nd`)
    } else if (number === 3){
        console.log(`${number}rd`)
    } else  {
        console.log(`${number}th`) 
    }
};