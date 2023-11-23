
// let cpf = '705.484.450-52';
// let cpfLimpo = cpf.replace(/\D+/g, '');
// let cpfArray = Array.from(cpfLimpo);

// const soma = cpfArray.reduce((acumulador, valor) => acumulador + Number(valor), 0);

// console.log(soma);
// Reunião com a equipe sobre Desenvolvimento Front-End.
// Stack Meeting - Front ende

// function ValidaCPF(cpfEnviado) {

//     Object.defineProperty(this, 'cpfLimpo', {  
//         enumerable: true,    
//         get: function(){
//             return cpfEnviado.replace(/\D/g, '');
//         }
//     });
// }

// ValidaCPF.prototype.valida = function(){
//     if(typeof this.cpfLimpo === 'undefined'){
//         return false;
//     } 
//     if(this.cpfLimpo.length !== 11) {
//         return false;
//     }
//     const cpfParcial = this.cpfLimpo.slice(0, -2);
//    const digido1 = this.criaDigito();
//     return true;
// }

// ValidaCPF.prototype.criaDigito = function() {
//     const cpfArray = Array.from(cpfParcial);
//     console.log(cpfArray);
// }

// const cpf = new ValidaCPF('705.484.450-52');

// console.log(cpf.valida());




// function ValidaCPF(cpfEnviado) {
//     Object.defineProperty(this, 'cpfLimpo', {
//         enumerable: true,
//         get: function () {
//             return cpfEnviado.replace(/\D/g, '');
//         }
//     });
// }

// ValidaCPF.prototype.valida = function () {
//  if(typeof this.cpfLimpo === 'unedfined') return false;
//  if(this.cpfLimpo.length !== 11) return false;

//  const cpfParcial = this.cpfLimpo.slice(0, -2);
//  const digido1 = this.criaDigito(cpfParcial);
//  const digido2 = this.criaDigito(cpfParcial + digido1);
//  console.log(digido2);

//  return true;
    
// }

// ValidaCPF.prototype.criaDigito = function (cpfParcial) {
//     const cpfArray = Array.from(cpfParcial);

//     let regressivo = cpfArray.length + 1;
//     const total = cpfArray.reduce((acumulador, valor) => {
//         acumulador += regressivo * Number(valor);
//         regressivo--;
//         return acumulador;
//     }, 0);

//     const digito = 11 - (total % 11);
//     return digito > 9 ? '0' : String(digito);
// }

// const cpf = new ValidaCPF('705.484.450-52');
// console.log(cpf.valida()); // Deve retornar true ou false, dependendo do CPF









function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined' || this.cpfLimpo.length !== 11) {
        return false;
    }
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const cpfCompleto = cpfParcial + digito1 + digito2;
    console.log(cpfCompleto)

    return cpfCompleto === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((acumulador, valor) => {
        acumulador += regressivo * Number(valor);
        regressivo--;
        return acumulador;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
}
const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida()); // Deve retornar true ou false, dependendo do CPF
