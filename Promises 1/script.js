
const resultado = document.querySelector('.resultado');
const enviarDados = document.querySelector('.btn');


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



async function executa() {

  try{
  
    const mensagens = [
      'Todo deu carto..',
      'Todo deu carto..',
      'Opa!! meu bem deu tudo certinho na mosca.',
      'O Temotio está aprendendo o JS',
    ]
    
    for (let mensagem of mensagens) {
      const frasesCriada = await  esperaAi(mensagem, crisNumeroAternativo());
      amostrarALista(frasesCriada)
    }

  } catch(e) {
    console.log(e);
    return;
  }
 
}


function amostrarALista(mensagem){
  const li = document.createElement('li');
  li.innerHTML = mensagem;
  resultado.appendChild(li);
}


enviarDados.addEventListener('click', e => {
  resultado.innerHTML = '';
  executa();
});




