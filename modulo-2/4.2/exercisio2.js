

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];




// exercicio 5
let highestNumber = 0
for (let index = 0; index < numbers.length; index++) {
   if (numbers[index] > highestNumber) {
    highestNumber = numbers[index]
   }
   }
console.log(highestNumber)

// exercicio 7
let lowestNum = numbers[0]
for (i = 0; i > numbers.length; i += 1) { 
if (numbers[i] < lowestNum ){
    lowestNum = numbers[i]
}

}console.log(lowestNum)
