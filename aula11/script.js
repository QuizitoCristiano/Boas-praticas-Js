
// class ValidaFormulario {

//     constructor(){
//         this.formulario = document.querySelector('.formulario');

//         this.eventos();
//     }

//     eventos(e){
//        this.formulario.addEventListener('submit', e => {
//         this.handleSubmit(e)
//        }) 
//     }

//     handleSubmit(e){
//         e.preventDefault();
//        const camposValidos = this.camposSaoValidos();
//     }

//     camposSaoValidos(){
//         let valid = true;

//         for (let erroText of this.formulario.querySelectorAll('.mensagem_de-erro')){
//             erroText.remove();
//         }

//         for (let campo of this.formulario.querySelectorAll('.validar') ) {
//             const label = campo.previousElementSibling.innerHTML;
//          if(!campo.value){
//             this.criaErro(campo, `Campo ${label} não pode estar em branco. `);
//             valid = false;
//          }

//          if (campo.classList.contains('cpf')){
//             if(!this.validarCPF(campo)) {
//                 valid = false;
//             }
//          }
        
//         }
//     }

//     validarCPF(campo){
//         const cpf = new validarCPF(campo.value);
//         if(!cpf.valida()){
//             this.criaErro(campo, 'CPF inválido.');
//             return false;
//         }


//         return true;
//     }

//     criaErro(campo, mensagem){
//       const div = document.createElement('div');
//       div.innerText = mensagem;
//       div.classList.add('mensagem_de-erro');
//       campo.insertAdjacentElement('afterend', div);
//     }

// }

// const valida = new ValidaFormulario();



// class ValidaFormulario {

//     constructor() {
//         this.formulario = document.querySelector('.formulario');

//         this.eventos();
//     }

//     eventos() {
//         this.formulario.addEventListener('submit', e => {
//             this.handleSubmit(e)
//         });
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const camposValidos = this.camposSaoValidos();
//     }

//     camposSaoValidos() {
//         let valid = true;

//         for (let erroText of this.formulario.querySelectorAll('.mensagem_de-erro')) {
//             erroText.remove();
//         }

//         for (let campo of this.formulario.querySelectorAll('.validar')) {
//             const label = campo.previousElementSibling.innerHTML;

//             if (!campo.value) {
//                 this.criaErro(campo, `Campo ${label} não pode estar em branco. `);
//                 valid = false;
//             }

//             if (campo.classList.contains('cpf')) {
//                 if (!this.validarCPF(campo)) {
//                     valid = false;
//                 }
//             }
//         }

//         return valid;
//     }

//     validarCPF(campo) {
//         const cpf = new ValidacaoCPF(campo.value); // Corrigido para usar ValidacaoCPF
//         if (!cpf.valida()) {
//             this.criaErro(campo, 'CPF inválido.');
//             return false;
//         }
    
//         return true;
//     }

//     criaErro(campo, mensagem) {
//         const div = document.createElement('div');
//         div.innerText = mensagem;
//         div.classList.add('mensagem_de-erro');
//         campo.insertAdjacentElement('afterend', div);
//     }

// }

// const valida = new ValidaFormulario();


class ValidaFormulario {

    constructor() {
        this.formulario = document.querySelector('.formulario');

        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        console.log(camposValidos ? 'Formulário válido' : 'Formulário inválido');
    }

    camposSaoValidos() {
        let valid = true;

        for (let erroText of this.formulario.querySelectorAll('.mensagem_de-erro')) {
            erroText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerHTML;

            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar em branco. `);
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validarCPF(campo.value)) {
                    this.criaErro(campo, 'CPF inválido.');
                    valid = false;
                }
            }
        }

        return valid;
    }

    validarCPF(cpf) {
        cpf = cpf.replace(/\D/g, '');

        if (cpf.length !== 11) {
            return false; // CPF inválido: deve conter 11 dígitos.
        }

        if (/^(\d)\1{10}$/.test(cpf)) {
            return false; // CPF inválido: todos os dígitos são iguais.
        }

        let soma = 0;
        let resto;

        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }

        resto = (soma * 10) % 11;

        if (resto === 10 || resto === 11) {
            resto = 0;
        }

        if (resto !== parseInt(cpf.charAt(9))) {
            return false; // CPF inválido: primeiro dígito verificador incorreto.
        }

        soma = 0;

        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }

        resto = (soma * 10) % 11;

        if (resto === 10 || resto === 11) {
            resto = 0;
        }

        if (resto !== parseInt(cpf.charAt(10))) {
            return false; // CPF inválido: segundo dígito verificador incorreto.
        }

        return true; // CPF válido
    }

    criaErro(campo, mensagem) {
        const div = document.createElement('div');
        div.innerText = mensagem;
        div.classList.add('mensagem_de-erro');
        campo.insertAdjacentElement('afterend', div);
    }

}

const valida = new ValidaFormulario();
