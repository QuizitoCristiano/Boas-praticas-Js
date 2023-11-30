
function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function(){

    };

    //Atributos ou métodos publicus
    this.nome = nome;
    this.sobrenome = sobrenome;

 
    this.metodo = function () {
        console.log(this.nome + ': Sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Oliveira');
const p2 = new Pessoa('Luiz', 'Oliveira');

p2.metodo(); // Saída: Luiz: Sou um método
