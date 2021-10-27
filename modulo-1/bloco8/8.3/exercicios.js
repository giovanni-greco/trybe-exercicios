// PARA FIXAR MAP()

//  Considere que você possui duas listas: o preço do primeiro produto ( Arroz ) é o primeiro elemento da lista prices ( 2.99 ), e assim por diante:
// MERGE

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];



// EXERCICIOS


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

//   1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

let newArr = books.map((book) => {
    let newbookArr;
    newbookArr = `${book.name} - ${book.genre} - ${book.author.name}`
    return newbookArr
});

console.log(newArr)


// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map , sort


// let authorArr = books.sort((a, b) => {
//     b.author.birthYear - a.author.birthYear
// }).map((element) => {
//   let newAuthorArr = {}
//   newAuthorArr.author = element.author.name
//   newAuthorArr.age = element.releaseYear - element.author.birthYear
//   return newAuthorArr;
// });

let authorArr = books.map((element) => {
    let newAuthorArr = {}
    newAuthorArr.author = element.author.name
    newAuthorArr.age = element.releaseYear - element.author.birthYear
    return newAuthorArr;
}).sort((a, b) => {
    b.age - a.age
})

console.log(authorArr);

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter ;

let ficOrFant = books.filter((book) => 
    book.genre === 'Fantasia' || book.genre === 'Ficção Científica'
)

console.log(ficOrFant)


// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort
// let overSixtyYo = books.filter((book) => {
//     book.releaseYear > 1960
// }); 
// console.log(overSixtyYo)


// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

let sortedFanFicAuthors = books.filter((book) => 
    book.genre === 'Fantasia' || book.genre === 'Ficção Científica'
).map((element) => element.author.name).sort((a, b) => b - a)
console.log(sortedFanFicAuthors);


// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

let booksOverSixty = books.filter((book) => book.releaseYear <= 1960).map((book) => book.name)

console.log(booksOverSixty)

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.
