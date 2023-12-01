
// const resultado = document.querySelector('.resutado');
// const enviarDodos = document.querySelector('.btn');



// function numeroRand(min = 1, max = 3) {
//     min *= 1000;
//     max *= 1000;

//     return Math.floor(Math.random() * (max - min) + min);
// }


// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if(typeof msg !== "string") {
//                     reject ('Isso não é nada bom meu caro tente novamente.....');
//                 return;
//             }

//             resolve(msg.toUpperCase() + " -  Passei na promise");
//             return;
            
            

//         }, tempo)
//     }) 

// }


// async function executa() {
//     try {

//         const frase1 = await esperaAi('Opa!! meu bem deu tudo certinho na mosca.', numeroRand());
//         console.log(frase1);
//         resultado.innerHTML = frase1;
//         const frase2 = await esperaAi('O Temotio está aprentendo o JS', numeroRand());
//         console.log(frase2);
//         resultado.innerHTML = frase2;
//         const frase3 = await esperaAi('Eu também estou aprentendo o JavaScript.js', numeroRand());
//         console.log(frase3);
//         resultado.innerHTML = frase3;
//         const frase4 = await esperaAi('O PH é um Pio dos projetos', numeroRand());
//         console.log(frase4);
//         resultado.innerHTML = frase4;

//         resultado.innerHTML = ('Tudo deu certo porque você é demais...');


//     } catch (e) {
//         console.log(e)
//     }

// }



// enviarDodos.addEventListener('click', e => {
//   return executa();
// })




const resultado = document.querySelector('.resultado');
const enviarDados = document.querySelector('.btn');

function numeroRand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== "string") {
                reject('Isso não é nada bom meu caro, tente novamente.....');
                return;
            }

            resolve(msg.toUpperCase() + " -  Passei na promise");
        }, tempo);
    });
}

async function executa() {
    try {
        const mensagens = [
            'Opa!! meu bem deu tudo certinho na mosca.',
            'O Temotio está aprendendo o JS',
            'Eu também estou aprendendo o JavaScript.js',
            'O PH é um Pio dos projetos'
        ];

        for (const mensagem of mensagens) {
            const resultadoPromise = await esperaAi(mensagem, numeroRand());
            console.log(resultadoPromise);
            exibirNaLista(resultadoPromise);
        }

        exibirNaLista('Tudo deu certo porque você é demais...');
    } catch (e) {
        console.log(e);
    }
}

function exibirNaLista(mensagem) {
    const li = document.createElement('li');
    li.textContent = mensagem;
    resultado.appendChild(li);
}

enviarDados.addEventListener('click', () => {
    resultado.innerHTML = ''; // Limpa o conteúdo anterior
    executa();
});