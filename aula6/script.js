// function Pessoas(nome, preco, estoque){
//     this.nome = nome;
//     this.preco = preco;

//     let estoquePrivado = estoque;

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, //Mostra a chave
//         configurable: true, // configurável


//         get: function() {
//             return estoquePrivado;
//         },

//         set: function(valor){
//             if(typeof valor !== 'number'){
//                 throw new TypeError('Mensagem');
//             }

//             estoquePrivado = valor;
//         }
//     })
// }



// const produto = {nome: 'Caneca', preco: 2.8};
// const outraCousa = { 
//     ...produto,
//     material: 'Porcelana'
// };

// produto.nome = 'Carafa De Água';
// produto.preco = 80.99;


// console.log(outraCousa);

// const produto = {nome: 'Caneca', preco: 2.8, material: 'Porcelana'};
// for (let valor of Object.entries(produto)) {
//     console.log(valor[0], valor[1]);
// }

// function Pessoa(nome, sobrenome, idade) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;

//     this.nomeCompleto = () => this.nome + '' + this.sobrenome;


// }

// const pessoa1 = new Pessoa('Luiz', 'Outavio', 20);
// const pessoa2 = new Pessoa('Malu', 'Sanso', 19);

// console.log(pessoa1, pessoa2);



// function CriaCaro(nome, moder, core, ano){
//     this.nome = nome;
//     this.moder = moder;
   

//     this.core = core;
//     this.ano = ano;
// }
// const outroCarro = () => {
    
// }
// const novoCora = new CriaCaro('Ford', 'Jeep', 'Velmelho', 2023);
// const novoCora1 = new CriaCaro('Volvo', 'Fiat', 'Azul', 2020);
// const novoCora2 = new CriaCaro('ASX', 'Mitsubishi', 'Brango', 2022);


// console.log(novoCora, novoCora1, novoCora2)




 

// function Produto(nome, preco) {
//     this.nome = nome;
//     this.preco = preco;
// }
// Produto.prototype.desconto = function(percentual){
//     this.preco = this.preco - (this.preco * (percentual / 100));
// }
// Produto.prototype.aumento = function(percentual){
//     this.preco = this.preco + (this.preco * (percentual / 100));
// }

// const produto1 = new Produto('Camiseta', 90);
// const produto2 = new Produto('Tênis', 79.99);
// produto1.desconto(100);
// produto2.aumento(100);


// const novoProduto = {
//     nome: 'Caneca De Água',
//     preco: 15
// }
// Object.setPrototypeOf(novoProduto, Produto.prototype);
// novoProduto.aumento(10);



// console.log(produto1); // Exibe: Produto { nome: 'Camiseta', preco: 29.99 }
// console.log(produto2); // Exibe: Produto { nome: 'Tênis', preco: 79.99 }


// function Produto(nome, preco ){
//     this.nome = nome;
//     this.preco = preco;
// }

// Produto.prototype.aumento = function(quantia){
//     this.preco += quantia
// }
// Produto.prototype.desconto = function(quantia){
//     this.preco -= quantia
// }


// const produto1 = new Produto('Camiseta', 20);
// const produto2 = new Produto('Caneca' , 5.99);


// console.log(produto1, produto2);



function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};


function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.construtor = Camiseta;


function Caneca(nome, preco, cor, material, estoque){
    Produto.call(this, nome, preco);
    this.cor = cor;
    this.material = material;
   

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,

        get: function(){
            if(typeof valor !== 'number') return;
            return estoque;
        },
        set: function(valor) {
            estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.construtor = Caneca


const produto1 = new Camiseta('Regata', 20, 'Preta');
const produto2 = new Caneca('Caneca da Mãe',15, 'Vermelha', 'Cerâmica', 5);




// Exemplo de uso dos métodos
produto1.aumento(5);
produto2.desconto(2);

console.log(produto1, produto2);

// 