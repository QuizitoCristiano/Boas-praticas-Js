const myInputSaque = document.querySelector('.inputSacar');
const myInputDepositar = document.querySelector('.inputDepositar');
const resutdato = document.querySelector('.res');
const newRes = document.querySelector('.newRes')
const resSaque = document.querySelector('.resSaque')
const botaoSacar = document.querySelector('.botaoSacar');
const botaoDepositar = document.querySelector('.botaoDepositar');

const conta1 = new Conta(11, 22, 10);

botaoDepositar.addEventListener('click', function () {
    const valorDepositar = parseFloat(myInputDepositar.value);
    if (!isNaN(valorDepositar)) {
        conta1.depositar(valorDepositar);
    } else {
        resutdato.textContent = 'Digite um valor válido para depositar.';
    }
});

botaoSacar.addEventListener('click', function () {
    const valorSaque = parseFloat(myInputSaque.value);
    if (!isNaN(valorSaque)) {
        conta1.secar(valorSaque);
    } else {
        resutdato.textContent = 'Digite um valor válido para sacar.';
    }
});


function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.secar = function(valor) {
    if (valor > this.saldo) {
        resSaque.textContent = `Saldo insuficiente: ${this.saldo}`;
        return;
    } 

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    newRes.textContent = 
        `Ag/c: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
}



// Curso na Udemy de Javascript