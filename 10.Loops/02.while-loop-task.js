// generating 5th table

/*let CurrentTable=5;
let start=1;
let End=10;

while(start<=End){
    console.log(`${CurrentTable} X ${start} = ${CurrentTable * start}`)
    start++;
}*/

//let ask user to enter the value

import readline from 'readline-sync';

let currentNumber = readline.questionInt(" Enetr the table number :");
let start =1;
let end =10;

while(start<=end){
    console.log(`${currentNumber} X ${start} = ${currentNumber * start}`);
    start++;
}
