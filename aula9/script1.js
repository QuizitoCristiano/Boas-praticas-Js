
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
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            Enumerator: true,
            confgurable: false,

            value: cpfEnviado.replace(/\D+/g, '')
        });


    }

    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }


        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';

    }



    vilida() {
        if (!this.cpfLimpo) {
            return false;
        }
        if (typeof this.cpfLimpo !== 'string') {
            return false;
        }

        if (this.cpfLimpo.length !== 11) {
            console.log('CPF invalido');
            return false;
        }

        if (this.eSequencia()) return false;
        this.geraNovoCpf();
       

        return this.novoCPF === this.cpfLimpo;
    }
}

const validacpf = new ValidaCPF('802.056.439-06');

if(validacpf.vilida()) {
    console.log('CPF válido')
} else{
    console.log('CPF inválido tenta novamente!')
}