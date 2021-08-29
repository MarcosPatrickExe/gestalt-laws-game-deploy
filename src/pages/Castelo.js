import React from 'react';
//import {ReactComponent as CenarioCastelo} from '../images/backgrounds/casteloCenario.svg';
import CenarioCastelo from '../images/imagens_ranking/fundoCastelo.jpg';
import '../styles/CasteloStyle.css';
import TransitionEffects from '../transitionEffects.js';
import '../DadosJogador.js';

export default function Castelo(props){
  
    let {state} = props.ctxMain;
    const estiloFundo = require("../funcoesGerais.js");
    //onst {getTempoTorre, getTempoLaboratorio, getTempoMoinho} = global.DadosJogador;
    //const player = window.localStorage[window.localStorage.key(0)]; 

    function getTempototal(){
    
        let minTotal = global.DadosJogador.getTempoTorre()[0] + global.DadosJogador.getTempoMoinho()[0] + global.DadosJogador.getTempoLaboratorio()[0];//SOMANDO TODOS OS MINUTOS LEVADOS NOS 3 JOGOS
        let segTotal = global.DadosJogador.getTempoTorre()[1] + global.DadosJogador.getTempoMoinho()[1] + global.DadosJogador.getTempoLaboratorio()[1];//SOMANDO TODOS OS SEGUNDOS LEVADOS NOS 3 JOGOS

        let minutosRestantes = segTotal/60;
        let segundosRestantes = segTotal%60;

        minTotal += minutosRestantes;
        segTotal += segundosRestantes;

        return (""+Math.floor(minTotal)+"min : "+Math.floor(segTotal)+"s");
    }
    

    let gerarMinutoAleatorio =()=>{// 0 <= N <11 
       return Math.floor( Math.random()*(11-0));
    }


    let gerarSegundoAleatorio =()=>{// 0 <= N <61 
      return Math.floor( Math.random()*(61-0));
   }

  // console.log(props.estadoMain);
   //alert(getTempototal());
   let valores = [
      [state.player.nome, getTempototal()],
      ['Juliete','Xmin : Ys'],
      ['Filomena','Xmin : Ys'],
      ['Gabriela','Xmin : Ys'],
      ['Gustavo','Xmin : Ys'],
      ['Fernanda','Xmin : Ys'],
   ]

   /**link para resolver o problema da message "Treating warnings as errors because process.env.CI = true. Failed to compile":  
    * https://stackoverflow.com/questions/62663451/treating-warnings-as-errors-because-process-env-ci-true-failed-to-compile
   */


   let novosValores = valores.map( (elemento, index)=>{

       if(index === 0){
          return elemento;
       }else{
         //let result = new Array(6,2);
         elemento[1] = elemento[1].replace("X", (""+gerarMinutoAleatorio()));
         elemento[1] = elemento[1].replace("Y", (""+gerarSegundoAleatorio()));

         //alert("nome: "+elemento[0]+"/ tempo: "+elemento[1]);
         return elemento;
        }
   });

   //Math.random().toString(36).substr(2, 9)
   //console.dir(JSON.stringify(novosValores,null, 4));
      
   const linhas = novosValores.map( (elemento, indice)=>{//adicionando linhas e colunas no componente 'vals'
      return  <tr>
              <td>{elemento[0]}</td>
              <td>{elemento[1]}</td>
         </tr>;
   });
   
   return (
      <div>
            <TransitionEffects effectName="fadeIn" />

            <div className="tabelaModalRanking">
               <table>
                     <thead>
                        <tr>
                           <th> Nome do <br /> jogador: </th>
                           <th> Tempo total: </th>
                        </tr>
                     </thead>
                    <tbody>
                     {linhas}

                    </tbody>
               </table>
            </div>


  
         <img src={CenarioCastelo}  style={estiloFundo()} alt="Ranking dos jogadores" /> 
     </div>
   );
}                 

//comando para ver todos os pacotes instalados atualmente na máquina:
//npm list -g --depth=0