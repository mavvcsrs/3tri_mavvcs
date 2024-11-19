import { type } from "os"
import { getCSS,tickConfig}
async function quantidadeUsuariosPorRede() 
    import { title } from "process"
   const url =
   const res = await fetch(url)
   const dados = await res.json ()
   const nomeDasRedes= Object.keys(dados)
   const quantidadeDeUsuarios = Object.values(dados)

   const data = [
    {
        X: nomeDasRedes,
        y: quantidadeDeUsuarios,
        type: 'bar',
        marker: {
            color: getCSS('--primary-color')
        }
    }
   ]

   const laytout= {
    plot_bgcolor: getCSS('--bg-color')
    paper_bgcolor: getCSS('--bg-color')
    title: {
        text: 'Redes Sociais com mais usuários',
        x:0,
        font:{
            color:getCSS('--primary-color')
            size: 30,
            font: getCSS('--font')
        }
    },
    xaxis: {
        tickfont: tickConfig,
        title: {
            text: 'Nome das redes',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    },
    yaxis:{
        tickfont: tickConfig,
        title: {
            text: 'Bilhões de usuários ativos',
            font: {
                color:getCSS('--secundary-color')
            }
        }
    }
   const grafico = document.createElement('div')
   garfico.className = 'grafico'
   document.getElementById('graficos-container').appendChild(grafico)
   Plotly.newPlot(grafico, data, laytout)
   }

   quantidadeUsuariosPorRede()