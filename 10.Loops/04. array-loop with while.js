let Sisters=["Khairunnisa", "Sakina", "Samina", "Shavan"]
console.log(Sisters.length)

console.log("to access array values one by one")
console.log(Sisters[0])
console.log(Sisters[1])

console.log(Sisters[2])

console.log(Sisters[3])

// 2nd method with while loop

let firstvalue = 0;
let endvalue = Sisters.length

while(firstvalue<=endvalue){
    console.log(Sisters[firstvalue])
    firstvalue++;
}
