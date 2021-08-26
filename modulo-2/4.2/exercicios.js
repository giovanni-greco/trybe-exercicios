// Fixacação

let cores = ["Red", "Green", "Blue"]
console.log(cores)

cores.push("Yellow")
console.log(cores)

console.log(cores.length)

cores.unshift("Purple");
console.log(cores);

console.log(cores.sort())

cores.pop()
console.log(cores);

cores.shift()
console.log(cores);

let indexCores = cores.indexOf("Red");
console.log(indexCores)

// Fixacação - 1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1]

console.log(menuServices);

// fixacao 2


let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);

// fixacao 3

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

console.log(menu);

menu.push("Contato")

console.log(menu);

// fixacao 4

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index++) {
    console.log(groceryList[index])
    
}

// fixacao 5

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let length of names) {
    console.log(names)
}