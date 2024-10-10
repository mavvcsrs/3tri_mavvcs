const url = ''https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json''console.log(url);

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt (dados.tempo_medio - horas) *100)
    const minutos = Math.round(pessoasConectadas / pessoasNoMundo) *100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = 'Você sabia que o mundo tem'
    PAREI EM AULA 7

}

vizualizarInformacoesGlobais()