
// Function Map


// const pessoas = [
//     {id: 3, nome: 'Luiz'},
//     {id: 4, nome: 'Maria'},
//     {id: 2, nome: 'Letícia'},
//     {id: 1, nome: 'Helena'},
// ]

// const novasPessoas = {};

// for (const pessoa of pessoas) {
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// }

// const novasPessoas = new Map();
// for (const pessoa of pessoas){
//     const {id} = pessoa;

//     novasPessoas.set(id, {...pessoa});

// }

// novasPessoas.delete(5);

// console.log(novasPessoas)



class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            Enumerator: true,
            confgurable: false,
            
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }
}

const validacpf = new ValidaCPF('802.056.439-06');

console.log(validacpf)