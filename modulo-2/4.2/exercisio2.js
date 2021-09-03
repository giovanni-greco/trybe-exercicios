

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// exercicio 2
let sum = 0
for (let index = 0; index < 10; index++) {
   
    sum += numbers[index]
   
}
console.log(sum)

// exercicio 3 + 4
let media = 0
for (let index = 0; index < 10; index++) {
    media += numbers[index]  
}
if (media > 20) {
    console.log('Valor maior que 20')
} else {
    console.log('Valor menor ou igual 20')
}
