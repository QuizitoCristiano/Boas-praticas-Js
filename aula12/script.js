function crisNumeroAternativo(min = 1, max = 3) {
    min *= 1000;
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
   return new Promise((resolve, reject) => {
    setTimeout( () => {

        if(typeof msg !== 'string'){
            return ('Isso não é nada bom tem um numero tente novamente...');
            return;
        }

        resolve(msg.toUpperCase() + " -  Passei na promise");
        return;

    }, tempo);

   })
    
}


async function executa() {
    try {
        const frase1 = await esperaAi('tudo bem? ', crisNumeroAternativo());
        console.log(frase1);

        const frase2 = await esperaAi('tudo está indo bem agora.', crisNumeroAternativo());
        console.log(frase2);

        const frase3 = await esperaAi('Obrgigado meu bem adorei fechou ', crisNumeroAternativo());
        console.log(frase3);

        console.log('Bom tudo já deu certo meu cro beleza');
    } catch(e) {
        console.log(e)
    }
}

executa();