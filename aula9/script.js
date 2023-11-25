
// função Factory Function + Prototypes


// function criaPessoa(nome, sobrenome, idade) {
//     const pesoaDePrototype = {
//         falar() {
//             console.log(`${this.nome} está falando.`);
//         },

//         comer(){
//             console.log(`${this.nome} esta comendo`);
//         },

//         beber(){
//             console.log(`${this.nome} está bebemdo one moment.`);
//         }
//     }

//     return Object.create(pesoaDePrototype, {
//         nome: {value: nome},
//         sobrenome: {value: sobrenome},
//         idade: {value: idade}
//     })

// }


// const p1 = criaPessoa('Letícia', 'Camargos', 20);
// const p2 = criaPessoa('Quizito', 'Critiano', 20);
// console.log(p1, p2);



const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} Está bebendo.`)
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} Está comento no momento!!`)
    },
};

const pesoaDePrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome, idade) {
    return Object.create(pesoaDePrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome },
        idade: { value: idade }

    })
}


const p1 = criaPessoa('Letícia', 'Camargo', 20);
const p2 = criaPessoa('Quizito Crstiano', 'Agostinho', 20);
console.log(p1, p2);




