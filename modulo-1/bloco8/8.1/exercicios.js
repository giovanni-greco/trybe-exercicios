// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .


function newEmployee(fullName) {
return {
    Nome: fullName,
    Email: `${fullName.replace(/ /i, '_')}@trybe.com`,
}
}; //console.log(newEmployee('giovanni greco'))



const newEmployees = (callback) => {
    const employees = {
      id1: newEmployee('Giovanni Greco'),
      id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
    console.log(employees)
  };
  console.log(newEmployees(newEmployee))

//   2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const lottoResult = (myBet, callback) => {
  let lottoNums = (Math.round(Math.random() * 5))
//   lottoCheck(myBet, lottoNums)
  console.log(lottoNums)
}

function lottoCheck(myBet) {
    if (myBet !== lottoNums) {
       return  console.log('Try again')
    } return console.log('Parabens')
}

console.log(lottoResult(4, lottoCheck))

// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const scoreCounter = (answerArr, myAnswers, callback) => {
 answerChecker(answerArr, myAnswers)
}

function answerChecker(a, b) {
    let score = 0
    for (let i = 0; i < a.length; i += 1) {
     if (a[i] === b[i]) {
         score += 1
     } else {
         score -= 0.5
     }
        
    }return score
}
console.log(scoreCounter(RIGHT_ANSWERS, STUDENT_ANSWERS, answerChecker ))