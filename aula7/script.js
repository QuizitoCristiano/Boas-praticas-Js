// Valitando Cpf na pratica
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (this.cpfLimpo === null || this.cpfLimpo.length !== 11) {
        return false;
    }
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const cpfCompleto = cpfParcial + digito1 + digito2;
    console.log(cpfCompleto);

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

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
   
}

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida()); // Deve retornar true ou false, dependendo do CPF

if (cpf.valida()) {
    console.log('CPF válido, meu caro!!!');
} else {
    console.log('Houve um erro. O CPF é inválido. Tente novamente!!!');
}