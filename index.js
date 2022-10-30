const axios = require('axios');
const { format } = require('date-fns')

function isEleito(condicao) {
    if(condicao == 'n') return 'Não eleito' 
    else return 'Eleito'
}

async function showResults (response) {
    const [ candidateZero, candidateOne ] = response.data.cand
    console.log(format(new Date(), "'Data de hoje:' dd/MM/yyyy"))
    console.log(object);
    console.log('__________________________________________________________________');
    
    console.log(`CANDIDATO: ${candidateZero.nm}`);
    console.log(`Votos válidos: ${candidateZero.vap} votos`)
    console.log(`Porcentagem dos votos válidos: ${(candidateZero.pvap)}%`)
    console.log(`Eleito: ${isEleito(candidateZero.e)}`)
    console.log('__________________________________________________________________');

    console.log(`CANDIDATO: ${candidateOne.nm}`);
    console.log(`Votos válidos: ${candidateOne.vap} votos`)
    console.log(`Porcentagem dos votos válidos: ${(candidateOne.pvap)}%`)
    console.log(`Eleito: ${isEleito(candidateOne.e)}`)
    console.log('__________________________________________________________________');
}

(async () => {
    try {
        setInterval(async () => {
            const response = await axios.get('https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json')
            await showResults(response)
        },2000)
    }
    catch (e) {
        console.log(e);
    }

})()

