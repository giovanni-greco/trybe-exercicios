// exercicios de fixação

// objetos

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' ' + 'tem ' + player.age + ' ' + 'de idade.')

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

console.table(player)

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' ' + 'foi eleita a melhora jogadora do mundo ' + player.bestInTheWorld.length + ' vezes.')

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata' )



// for in
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };
  
  for (const key in names) {
      console.log('Olá ' + names[key])
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for (let key in car) {
      console.log(key, car[key])

  }

  //   funcoes

  function sum(a, b) {
      return a + b;
  }
  sum(10, 20)
  
  // exercicios

  
  //   exerciico 1
  
  console.log('Bem vinda, ' + info.personagem)
  
  // exericicio 2
  info.recorrente = 'sim'
  
  console.log(info)
  
  // exercicio 3
  
  for (let key in info) {
      console.log(key)
    }
    
    // exericicio 4
    
    for (let key in info) {
        console.log(info[key])
    }
    
    // exericico 5
    
    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'sim',
      };

    let info2 = {
        personagem: 'Tio Patinhas',
        origem: 'Christimas on Bear Mountain',
        nota: 'O ultimo Mac Patinhas',
        recorrente: 'sim',
    }
    
    for (let key in info) {
    if (key = 'recorrente' && info[key] === 'sim' && info2[key] === 'sim') {
        console.log('ambos recorrentes') } 
        else {
            console.log(info[key] + ' e ' + info2[key])
        }
    }
