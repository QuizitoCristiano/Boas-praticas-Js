// function criaNumeroAleatorio(min, max){
//     min *= 1000;
//     max *= 1000;
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function esperaAi(msg, tempo){

//     return new Promise((resolve, reject) => {

//         if(typeof msg !== 'string') {
//             reject('BAD VALUE');
//         }

//         setTimeout( () => {
//             resolve(msg);
//         }, tempo);

//     });

// }
// esperaAi('Conexão como o BD ', criaNumeroAleatorio(1, 4))
// .then(resposta => {
//     console.log(resposta);
//     return esperaAi('Buscando dados da Base', criaNumeroAleatorio(1, 3));
// }).then(resposta => {
//     console.log(resposta);
//     return esperaAi( 2222, criaNumeroAleatorio(1, 3));
// }).then(resposta => {
//     console.log(resposta);
//     return esperaAi('Exibe dados na tela', criaNumeroAleatorio(1,3));
// }).then(resposta => {
//  console.log(resposta);
// })
// .catch(e => {
//     console.log('ERRO:', e)
// });

// esperaAi('Frase 3', criaNumeroAleatorio(1, 4));

function crisNumeroAternativo(min = 1, max = 3) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Isso não é válido:");
        return;
      }

      resolve(msg.toUpperCase() + " -  Passei na promise");
      return;
    }, tempo);
  });
}

// esperaAi("Todo deu carto..", crisNumeroAternativo())
<<<<<<< HEAD
//   .then((valor) => {
//     console.log(valor);
//     return esperaAi('Opa!! a frese dois deu boa beleza', crisNumeroAternativo())
//   }).then(valor => {
//     console.log(valor);
//   })
//   .catch(e => console.log(e));


async function executa() {

  try{

  
    const fase1 = await esperaAi("Todo deu carto..", crisNumeroAternativo())
    console.log(fase1);
  
    const fase2 = await esperaAi('fase2', crisNumeroAternativo())
    console.log(fase2);
  
    const fase3 = await esperaAi("Todo deu carto..", crisNumeroAternativo())
    console.log(fase3);
  
    console.log('Terminamos na fase três', fase3);
  } catch(e) {
    console.log(e);
    return;
  }
 
}

executa();
=======
// .then((valor) => {
//   console.log(valor);
//   return esperaAi('Opa!! a frese dois deu boa beleza', crisNumeroAternativo())
// }).then(valor => {
//     console.log(valor);
// })
// .catch(e => console.log(e));

async function executa() {
  try {
    const Frase1 = await esperaAi(
      "Você está executando a frse 1",
      crisNumeroAternativo()
    );
    console.log(Frase1);

    const frese2 = await esperaAi(
      "Opa!! a frese dois deu boa beleza",
      crisNumeroAternativo()
    );
    console.log(frese2);
    const frese3 = await esperaAi(
      "Opa!! a frese 3 deu boa beleza",
      crisNumeroAternativo()
    );
    console.log(frese3);
    
  } catch (e) {
    console.log(e);
  }
}

executa();
>>>>>>> 7735d731e6ac2ab22d219dec1860edeea4aee8f9
