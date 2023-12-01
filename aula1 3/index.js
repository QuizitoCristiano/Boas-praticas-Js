

function criaCalculadora() {
    return {
        display: document.querySelector('.myInput'),

        iniciar() {
            this.cliqueBotoes();
            this.pressionaBotaoEnter();
        },

        pressionaBotaoEnter() {
            let.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13){
                    this.realizaConta();
                };
            });
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta) ;
            }
            catch (e) {
                alert('Opa!! meu caro deu muito rrui');
                return
            }

        },

        clearDisplay() {
            this.display.value = ''
        },

        apgaUmNumero() {
            this.display.value = this.display.value.slice(0, -1);
        },



        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                console.log(this);

                if (el.classList.contains('btn-num')) {
                    this.adicionarAoDisplay(el.innerText);
                };

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                };

                if (el.classList.contains('btn-del')) {
                    this.apgaUmNumero();
                };

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
                

            });
        },

        adicionarAoDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.iniciar();
