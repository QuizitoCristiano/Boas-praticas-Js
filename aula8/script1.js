// Valitando Cpf na pratica

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.secar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function () {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    )
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.secar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
   
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cc = new ContaCorrente('11', '20', 0, 100);
cc.depositar(10)
cc.secar(110);
cc.secar(10);

console.log(cc);
console.log()

const cp = new CP(12,33,0);
cp.depositar(10)
cp.secar(110);
cp.secar(10);
console.log(cp);