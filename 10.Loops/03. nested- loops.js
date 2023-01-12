/* const numberTable = 2;
let startNumber = 1;
const endNumber =10;

while(startNumber<=endNumber){
    console.log(`${numberTable} x ${startNumber} = ${numberTable * startNumber}`)
    startNumber++;
}

console.log(`end number of loop is ${startNumber}`) */

// Task ////

// 1st Method

/*const tableNumber = 2;
let startNumber =10;
const endNumber = 1;

while(startNumber>=endNumber){
    console.log(`${tableNumber} x ${startNumber} = ${tableNumber * startNumber}`)
    startNumber--;
}


// 2nd Method

const tableNumber = 2;
let startNumber =1;
let endNumber =10;

while(startNumber<=endNumber){
    console.log(`${tableNumber} x ${endNumber} = ${tableNumber * endNumber}`)
    endNumber --;
} */

// nested loop

let currentTableNumber =1;
let endTable = 10;

while(currentTableNumber<=endTable){
    console.log(`current table is ${currentTableNumber}`)

    let startNumber = 1;
    let endNumber = 10;

    while(startNumber<=endNumber){
        console.log(`${currentTableNumber} x ${startNumber} = ${currentTableNumber* startNumber}`)
        startNumber++;
    } currentTableNumber++;

} 

console.log("----------------------------")

