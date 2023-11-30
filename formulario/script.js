





class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }
 
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });  
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        
        if (camposValidos) {
            console.log('Formulário enviado...');
        } else {
            console.log('Formulário não enviado...');
        }
    }

    camposSaoValidos() {
        let camposValidos = true;

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            if (!this.validaCampo(campo)) {
                camposValidos = false;
            }
        }

        return camposValidos;
    }

    validaCampo(campo) {
        // Implement your validation logic for each field here
        // For example, check if the field is not empty

        if (campo.value.trim() === '') {
            // Add your own logic for handling invalid fields, such as displaying an error message
            console.log('Campo inválido: ', campo);
            return false;
        }

        return true;
    }
}

const valida = new ValidaFormulario();
