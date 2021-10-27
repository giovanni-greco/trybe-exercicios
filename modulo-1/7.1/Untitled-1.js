// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

  let testingScope = (escopo) => ( escopo ? `Não devo ser utilizada fora do meu escopo (if)` : `Não devo ser utilizada fora meu escopo (else)` );

  console.log(testingScope());


//   

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function sortArr(arr) {
    let newArr = arr.sort(function(a, b){return a - b})
    return newArr
}


console.log(`Os numeros, ${sortArr(oddsAndEvens)} estão em ordem descrescente`); // será necessário alterar essa linha 😉

// 

let f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}console.log(factorial(5))

let factorial = (n, func) => n * func *(n - 1);
console.log(factorial(6, factorial(6)))

function factorial(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * factorial( num - 1 ); }
} console.log(factorial(6))


const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};












const citiesAndStates = [
  {
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
  },
  {
    city: 'Salvador',
    state: 'Bahia',
  },
  {
    city: 'Porto Alegre',
    state: 'Rio Grande do Sul',
  },
  {
    city: 'Manaus',
    state: 'Amazonas',
  }
]


function getEvenNumbers(arr, city, state) {
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
      newArr.push(`${arr[i][city]} - ${arr[i][state]}`)    
  } return newArr;
};

console.log(getEvenNumbers(citiesAndStates, 'city', 'state'));








function allGreater(arr, num) {
  let result = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) { 
     result = true
    } else {
      return false
    }
    
  }
  return true
} console.log()

