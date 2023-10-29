const myInput = document.querySelector('.myInput');
const adicionarTarefa = document.querySelector('.meuBotton');
const resultados = document.querySelector('.resutado');

myInput.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        if (myInput.value) return;
        criaTarefa(textoInpute);

    }
})




adicionarTarefa.addEventListener('click', function (event) {

    if (!myInput.value) return;

    criaTarefa(myInput.value);

})

function craBotaoApagar(li) {
    li.innerHTML += '';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar)

}

function limparInput() {
    myInput.value = '';
    myInput.focus();
}

function criaTarefa(textoInpute) {
    const li = criaLi();
    li.innerHTML = textoInpute;
    resultados.appendChild(li);
    limparInput();
    craBotaoApagar(li);
    salvarTarefas();
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

document.addEventListener('click', function (event) {
    const elementos = event.target;
    if (elementos.classList.contains('apagar')) {
        elementos.parentElement.remove();
        salvarTarefas();
    }

})


function salvarTarefas() {
    const LiTarefas = resultados.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of LiTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar', '').trim();

        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionarTarefasSalvas();