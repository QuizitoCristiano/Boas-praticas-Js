
function criaCalculadora(){

    return {


        display: document.querySelector('.display'),

        iniciar(){
            this.cliqueBotoes();
        },

        cliqueBotoes(){
            document.addEventListener('click', function(event){
                const element = event.target

                if (element.classList.contains('btn-num')){
                        this.btnParaDisplay();
                };
            });
        },

       get btnParaDisplay() {

        }
    };
}

const calculadora = criaCalculadora();
calculadora.iniciar();