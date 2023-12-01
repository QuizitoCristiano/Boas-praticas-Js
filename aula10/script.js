



const inputDepositar = document.querySelector('.inputDepositar');
const myBtn = document.querySelector('.botaoSacar');
const resultado = document.querySelector('.res');

function pegarValoDigidado() {
    return inputDepositar.value;
}

function navalista() {
    // Cria um novo elemento <p> (parágrafo)
    const criaNovoElemento = document.createElement('p');
    
    // Adiciona algum conteúdo ao novo elemento (opcional)
    criaNovoElemento.textContent = "Conteúdo do parágrafo";
    
    // Adiciona o novo elemento ao resultado
    resultado.appendChild(criaNovoElemento);
}

function pegarOsValores() {
    myBtn.addEventListener('click', e => {
        e.preventDefault();
        
        // Chama a função para pegar o valor digitado
        const valorDigitado = pegarValoDigidado();
        
        // Exibe o valor no resultado
        resultado.innerHTML = valorDigitado;
        
        // Chama a função para criar e adicionar um novo elemento
        navalista();
    });
}

pegarOsValores();
