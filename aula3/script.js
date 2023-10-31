// Fuctory funtction fábriga

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split('');
            this.nome =  valor.shift();
            this.sobrenome = valor.join('');

         
        },

        falaNome: function(assunto){
            return `${this.nome} está tudo bem  ${assunto}.`
        },
        altura: altura,
        peso: peso,

       get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
};

const p1 = criaPessoa ('Quizito', 'Cristiano', 2.8,80);
const p2 = criaPessoa ('João', 'Maria', 4.9,80);
const p3 = criaPessoa ('Maria', 'José', 1.15,90);

p1.nomeCompleto = 'Felipe josé Luiz';
console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);