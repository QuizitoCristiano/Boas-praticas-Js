// function mandarDadosDoUsuario(event) {
//     event.preventDefault();

//     const meuNome = document.getElementById('#yourName');
//     const respostaDigidato = getElementById('#resposta');
// console.log(meuNome, respostaDigidato)

//     if(meuNome === ''){
//         respostaDigidato.document.inneText = meuNome
//     }
// }

// let a = 'A'; //B
// let b = 'b'; //C
// let c = 'c'; //A

// const numeros = [b, c, a];

// [a, b, c] = numeros;

// console.log(a, b, c);


// desestruturação de objeto

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 700, 8000, 9000];
// const [um, dois, tres, ...resto] = numeros;
// console.log(um, dois, tres,);
// console.log(resto);

// const pessoa = {
//   nome: "Luiz",
//   sobreNome: "Miranda",
//   idade: 30,
//   endreco: {
//     rua: "Av Curupis",
//     numero: 363,
//   },
// };

// const { nome,sobreNome,idade, ...resto } = pessoa;
// console.log(nome, sobreNome,idade, resto);
// const {endreco: {rua, numero}} = pessoa;
// console.log(rua, pessoa);
// const nome = pessoa.sobreNome;
// console.log(nome);



// desestruturação via atribução em js

// const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Manga', 'Papaia'];
// for (let i = 0; i < frutas.length; i++) {
//    console.log(frutas[i]);
// }
// for (let index = 0; index <= 10; index++) {
//   const par = index % 2 === 0 ? 'é um numero par' : 'é um numero ímpar'
//  console.log(index, par);

// }


// const elementos = [
//   {tag: 'p', texto: 'Qualque teto que voce quiser 1'},
//   {tag: 'div', texto: 'Frase 2'},
//   {tag: 'footer', texto: 'Frase 3'},
//   {tag: 'section', texto: 'Frase 4'},

// ]

// const res = document.querySelector('.resposta');
// const div = document.createElement('div');

// console.log(res)

// for (let i = 0;  i < elementos.length; i++) {
//  let {tag, texto} = elementos[i];
//  let tagCriada = document.createElement(tag);
//  tagCriada.innerText = texto;
//  div.appendChild(tagCriada);
// }

// res.appendChild(div);



// como adicionar uma com no js

// const paragrafos = document.querySelector('.Paragrafos');
// const ps = document.querySelectorAll('p');

// const estilosBody = getComputedStyle(document.body);
// const backgroundeColorBody = estilosBody.backgroundColor;

// console.log(backgroundeColorBody);

// for (let p of ps){
//   p.style.backgroundColor = backgroundeColorBody
//   p.style.color = 'green'
//   console.log(p);
// }

// const nome = 'Luiz'
// let i = 0;
// while (i < nome.length) {
//   console.log(nome[i]);
//   i++;
// }

// function random(min, max) {
//   const r = Math.random() * (max - min) + min;
//   return Math.floor(r)
// }


// const min = 1;
// const max = 50;
// let rend = random(min, max);


// while (rend !== 10) {
//   rend = random(min, max);
//   console.log(rend);
// }


// function max(x, y){
//   return x > y ? x : y;

// }

// console.log(max(10, 3));

// const ePaisagem = (largura, altura) => {
//   return  largura > altura ? true : false;

// }

// console.log(ePaisagem(1920, 1080));



// desestruturação de objeto


// function fizzBuzz(x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     throw ('x y tenque ser numeros')
//   }
//   return x + y;
// }

// console.log(fizzBuzz(1,5))


// try {
//   console.log(a);
//   console.log('Abri um arquivo');
//   console.log('Minipular um arquivo em gerou erro');
//   console.log('fechei o arquivo');
// } catch(erro) {
//   console.log('Tratando erro no sistema');
// } finally{
//   console.log('FINALLY: Eu sempre sou executado');
// }

// function retonaHora(data){
//   if( data && !(data instanceof Date)){
//   throw new TypeError('Esperando intância de date')
//   }

//   if(!data){
//     data = new Date();
//   }

//   return data.toLocaleTimeString('pt-BR',{
//     hour12: false
//   });
// }

// try{
//   const data = new Date('01-01-1970 12:58:12');
//   const hora = retonaHora();
//   console.log(hora)
// } catch(e){
//   // console.log('Tratar erro');
// } finally{
//   console.log('Tenha um bom dia!!')
// }


// function mostrarHora() {
//   let data = new Date();

//   return data.toLocaleTimeString('pt-BR', {
//     hour12: false
//   });
// }
<<<<<<< HEAD:script.js

// const time = setInterval(function(){
//   console.log(mostrarHora());
// }, 1000);

// setTimeout(function(){
//   clearInterval(time);
// });

// setTimeout(function(){
//   console.log('Olá mundo!');
// }, 5000);
=======

// const time = setInterval(function(){
//   console.log(mostrarHora());
// }, 1000);

// setTimeout(function(){
//   clearInterval(time);
// });

// setTimeout(function(){
//   console.log('Olá mundo!');
// }, 5000);


function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
  this.preco += quantia;
}

Produto.prototype.desconto = function(quantia){
  this.desconto -= quantia;
}

function Camiseta(nome, preco, cor, material){
  Produto.call(this, nome, preco);
  this.cor = cor;
  this.material = material;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta


const produto1 = new Camiseta('Blusa', 22.90, 'Verde', 'Algodão');
const produto3 = new Camiseta('Cropped', 34.99, 'Brango', 'Algodão');
const produto2 = new Produto('Caneca', 50);





// Exemplo de uso dos métodos

>>>>>>> 4cf21ec6c6095c8dd23543c5b8b03ad15bb5d598:aula2/script.js

produto2.desconto(5);
produto3.desconto(10);

<<<<<<< HEAD:script.js
function recursiva(max) {
  if(max >= 10) return;

  max++;

console.log(max);
recursiva(max);
}

recursiva(0)
=======
console.log(produto1, produto2, produto3);
>>>>>>> 4cf21ec6c6095c8dd23543c5b8b03ad15bb5d598:aula2/script.js
