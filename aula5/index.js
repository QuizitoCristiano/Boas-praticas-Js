
const produtos = [
    {
        nome: 'Banana',
        price: 1.9,
        id: '9',

    },

    {
        nome: 'Limão',
        price: 1.9,
        id: '9',

    },
    {
        nome: 'Mamão',
        price: 1.9,
        id: '3',

    },
    {
        nome: 'Coco',
        price: 1.9,
        id: '4',

    },
    {
        nome: 'Laranja',
        price: 1.9,
        id: '5',

    },
    {
        nome: 'Maça',
        price: 1.9,
        id: '1',

    },
    {
        nome: 'Maragujá',
        price: 1.9,
        id: '2',

    }



]



function listarProdutos(produtos) {
    produtos.forEach(function(produto) {
        console.log("ID: " + produto.id);
        console.log("Nome: " + produto.nome);
        console.log("Preço: " + produto.price);     
    });
}



listarProdutos(produtos);


const myInput = document.querySelector('.myInput');
const pocurasProtudo = document.querySelector('.meuBotton');
const resultados = document.querySelector('.resutado');

myInput.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        if (myInput.value) return;
        pesquisarFrutas(textoInpute);

    }
})
pocurasProtudo.addEventListener('click', function (event) {

   

    
    listarProdutos(produtos);
});

console.log(pocurasProtudo());

resultados.innerHTML = pocurasProtudo();




