// function funcoa() {

//     let total = 0;
//     for (let somarValores of arguments) {
//         total += somarValores;
//     }
//     console.log(total)
// }
// funcoa(1, 9, 67, 90, 46, 2, 3, 5, 7, 10, 59);
// function somarValores(operador, acumulardor, ...somaTotal) {

//     for (let valormatado of somaTotal) {
//         if (operador === '+') acumulardor += valormatado;
//         if (operador === '-') acumulardor -= valormatado;
//         if (operador === '/') acumulardor /= valormatado;
//         if (operador === '*') acumulardor *= valormatado;
//     }

//     console.log(acumulardor);
// }

// somarValores('+', 30, 39, 68, 50)


// function criaMultiplucador(multiplicador){
//     //Multiplicador de valores

//     return function (n){
//         return n * multiplicador
//     };
// }

// const duplucar = criaMultiplucador(6);
// const triplicar = criaMultiplucador(3);
// const quadriplica = criaMultiplucador(9);


// console.log(duplucar(2));
// console.log(triplicar(2));
// console.log(quadriplica(2));


// function retornaFuncao(){
//     const nome = "Quizito";

//     return function(){
//         return nome;
//     };
// }

// const funcoa = retornaFuncao();
// console.log(funcoa);

1 // function de callback


function rand(min = 1000, max = 3000){
    const numero = Math.random() * (max - min)+ min;
    return Math.floor(numero);
}

function callback1(callback){

    setTimeout(function(){
        console.log('f1');
        if(callback) callback();
    }, rand())
}

function callback2(callback){
    setTimeout(function(){
        console.log('f2');
        if(callback) callback();
    }, rand())
}

function callback3(callback){
    setTimeout(function(){
        console.log('f9');
        if(callback) callback();
    }, rand())
}


callback1(function(){
    callback2(function(){
        callback3(function(){
            console.log("Ola mundo");
        })
    });
});
  


callback1();

console.log('Ola mundo!');