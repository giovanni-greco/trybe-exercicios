// exercicio 1

const a = 10
const b = 25

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

// exercicio 2

const a2 = 1
const b2 = 2

if(a2 > b2) {
console.log(a2)
} else {
    console.log(b2)
}

// exercicio 3

const a3 = 1
const b3 = 33
const c3 = 3

if(a3 > b3 && a3 > c3) {
    console.log(a3)
} else if(b3 > a3 && b3 > c3) {
    console.log(b3)
}  else {
    console.log(c3)
}

// exercicio 4

const a4 = -28

if(a4 > 0) {
    console.log("Positivo")
} else {
    console.log("Negativo")
}

//  exercicio 5

const a5 = 60
const b5 = 60
const c5 = 60
const angleSum = a5 + b5 + c5
const validAngles = a5 > 0 && b5 > 0 && c5 > 0

console.log((a5 + b5 + c5))

if(validAngles) {
    if(angleSum === 180) {
        console.log(true) 
    } else {
        console.log(false)
    };
} else {
    console.log("error")
} 

// exercicio 6

const chessPiece = "rei"

switch (chessPiece.toLowerCase()) {
    case "rei":
        console.log("Uma casa em qualquer direção")
        
        break;
    
        case "peao":
        console.log("Uma casa em qualquer direçao para frente")
        
        break;    

    default:
        console.log("nao é uma peça valida")
        break;
}

// exercicio 7

const nota = 9

if(nota < 0 || nota > 100) {
    console.log("nota invalida")
} else if(nota >= 90) {
    console.log("a")
} else if(nota >= 80) {
    console.log("b")
} else if(nota >= 70) {
    console.log("c")
} else if(nota >= 60) {
    console.log("d")
} else {
    console.log("reprovado")
}

// exercicio 8

const a8 = 1
const b8 = 2
const c8 = 3
const pair = (a8 + b8 + c8)%2 


if(pair === 0) {
    console.log(true)
} else {
    console.log(false)
}

// exercicio 9

