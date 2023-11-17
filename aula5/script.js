// const nomes = ["Eduardo", "Maria", "Joana"];
// // const novo = [nomes.length];
// nomes.push('Mary', 'Scarlete')
// nomes.unshift('Prisila');

// const nomes = ['Luiz', 'Otávio', 'Miranda'];
// const nome = nomes.join(', ');
// console.log(nome)

// const nomes = ['Mariana','João', 'Eduardo', 'Gabriel', 'Júlia' ];

// const removidoNoArrya = nomes.splice(2, 2);

// console.log(nomes, removidoNoArrya);

// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilltert(valor, indice, array){

//     // if(valor > 10) {
//     //     return true
//     // } else{
//     //     return false
//     // }

//     // ou pode ser escrito

//     return valor > 10;

// }

// const numerosFiltrados = numeros.filter(callbackFilltert);
// ou pode ser escrito assim uma função de callback
//  const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados)



// Filter

// const pessoas = [
//   { nome: "Luis", idade: 20 },
//   { nome: "Mariana", idade: 30 },
//   { nome: "Lisania", idade: 27 },
//   { nome: "Mariasa", idade: 40 },
//   { nome: "Jóse", idade: 18 },
//   { nome: "Pedro", idade: 53 },
//   { nome: "Nelisa", idade: 73 },
//   { nome: "Felisberto", idade: 33 },
// ];

// const pessoasComNomeGrand = pessoas.filter(obj => obj.nome.length >= 8);
// const pessoasComMairoDeIdade = pessoas.filter(newObj => newObj.idade > 50);
// const pessoasComALetraA = pessoas.filter(AObj => AObj.nome.includes('a'));
// console.log( pessoasComALetraA);
// const pessoasComNomeGrand = pessoas.filter(function(obj) {
//    return obj.nome.length >= 5;

// })



// Map

// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

// const NumeroDobro = numeros.map(newNumero => newNumero * 2);

// const pessoas = [
//   { nome: "Luis", idade: 20 },
//   { nome: "Mariana", idade: 30 },
//   { nome: "Lisania", idade: 27 },
//   { nome: "Mariasa", idade: 40 },
//   { nome: "Jóse", idade: 18 },
//   { nome: "Pedro", idade: 53 },
//   { nome: "Nelisa", idade: 73 },
//   { nome: "Felisberto", idade: 33 },
// ];




// const ReturneONome = pessoas.map(valorDoNome => valorDoNome.nome )

// const idades = pessoas.map(obj => ({idade: obj.idade}));
// const addId = pessoas.map(function(obj, indice) {
//     const myNewObj = {...obj};
//     myNewObj.id = (indice + 1)* 3;
//     return myNewObj;
// })

// console.log(myNewObj);



const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

const valorTotal = numeros.reduce(function(acumulador, valor, indice, array) {
    // acumulador += valor
    // if(valor % 2 === 0) acumulador.push(valor)
    acumulador.push(valor * 4)

    return acumulador;

}, []);
console.log(valorTotal);