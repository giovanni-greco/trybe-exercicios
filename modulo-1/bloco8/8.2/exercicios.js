// // PARA FIXAR FOREACH
// // 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
//   emailListInData.forEach(showEmailList)

// //   PARA FIXAR FIND
// // 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = numbers.find((number) => number % 3 === 0 && number % 5 === 0)


// console.log(findDivisibleBy3And5)

// // 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = names.find((nome) => nome.length >= 5)

// console.log(findNameWithFiveLetters);

// // 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ]
  
//   function findMusic(id) {
//    const findSong =  musicas.find((musica) => musica.id === id)
//    return findSong
//   }
  
//   console.log(findMusic('31031685'))


// //   PARA FIXAR SOME/EVERY
// // 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;


// const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, nome) => {
//   return arr.some((element) => element.includes(nome));
// };

// console.log(hasName(names2, 'Ansa'));

// // 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   const verifyAges = (arr, minimumAge) => {
//      return arr.every((person, index) => person.age > 18)
//    }
 
//   console.log(verifyAges(people, 18));

// //   PARA FIXAR SORT

// // 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .
// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
// people.sort((a, b) => b.age - a.age)   
//   console.log(people);


// 
// 

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

//   1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find .

function findBornIn(year) {
   return books.find((book) => book.author.birthYear === year).author.name
}
console.log(findBornIn(1947))

// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach .

function smallerName() {
    let nameBook = 'ddddddddddddddddddddddddddddddddddddddddddddd'
    // escreva aqui o seu código
  books.forEach((book) => {
      if (book.name.length < nameBook.length) {
          nameBook = book.name
      }
  } )
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  } console.log(smallerName());


  //3 - Encontre o primeiro livro cujo nome possui 26 caracteres.


  function getNamedBook() {
    return books.find((book) => book.name.length === 26).name
  }console.log(getNamedBook(books))

//   4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
    return books.sort((a, b) => b.releaseYear - a.releaseYear)
  }

  console.log(booksOrderedByReleaseYearDesc())

//   5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

function everyoneWasBornOnSecXX() {
   return books.every((book, index) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000 )
}
console.log(everyoneWasBornOnSecXX())

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

function someReleasedEighties() {
    return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989 )
}
console.log(someReleasedEighties())

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

function authorUnique() {
     return books.every((book) )
}