const axios = require('axios');

function calculateValidPercentage(response) {
    const totalValidVotes = parseInt(response.data.tv)
    const countedVotes = response.data.pst
    const validVotes = parseFloat(response.data.vv)
    const totalValidVotesLula = parseInt(response.data.cand[0].vap)
    const validVotePercentageLula = response.data.cand[0].pvap
    const lulaVotesPerTotal = totalValidVotesLula / totalValidVotes 

    console.log((new Date().toTimeString()))
    console.log(`Total dos votos válidos: ${validVotes} votos`)
    console.log(`Porcentagem dos votos do Lula dos votos válidos: ${(lulaVotesPerTotal * 100).toFixed(2)}%`)
    console.log(`Porcentagem dos votos do Lula dos votos contabilizados): ${validVotePercentageLula}%`)
    console.log(`Porcentagem dos votos contabilizados: ${countedVotes}%`)
    console.log('__________________________________________________________________');
}


(async () => {
    try {
        setInterval(async () => {
            const response = await axios.get('https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json')
            calculateValidPercentage(response)
        },10000)
    }
    catch (e) {
        console.log(e);
    }

})()

