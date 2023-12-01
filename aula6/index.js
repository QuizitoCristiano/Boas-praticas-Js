

function Calculadora() {
    this.display = document.querySelector('.myInput');

    this.capturaClique = () => {
        document.addEventListener('click', (event) => {
            const el = event.target;

            if (el.classList.contains('btn-num')) {
                this.adicionarAoDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clear(el);
            }

            if (el.classList.contains('btn-del')) {
                this.del(el);
            }
            if (el.classList.contains('btn-eq')) {
                this.realizarConta(el);
            }
        });
    };

    this.clear = () => {
        this.display.value = '';
    }

    this.del = () => {
        this.display.value = this.display.value.slice(0, -1);

    }




    this.realizarConta = () => {
        let conta = this.display.value;
    
        try {
            conta = eval(conta);
    
            if (isNaN(conta) || !isFinite(conta)) {
                alert('Opa!!! Não deu boa meu amigo.');
                return;
            }
    
            this.display.value = String(conta);
        } catch (error) {
            alert('Opa!! meu caro deu muito ruim');
        }
    };
    
    this.capturaEventoDoBotaoEnter = () => {
        document.addEventListener('keydown', (e) => {
            if (e.key === "Enter") {
                e.preventDefault(); // Evita que o formulário seja enviado, se aplicável
                this.realizarConta();
            }
        });
    }
    

    this.iniciar = () => {
        this.capturaClique();
        this.capturaEventoDoBotaoEnter();
    };

    this.adicionarAoDisplay = (valor) => {
        this.display.value += valor;
    };
}

const calculadora = new Calculadora();
calculadora.iniciar();
