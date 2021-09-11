import React, { useState } from 'react';
import '../styles/BotaoAjudaStyle.css';
//import '../styles/PersonagemStyle.css';//reutilizando o efeito de escurer tela presente no arquivo de 'PersonagemStyle.css'
//import { Modal } from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';//importando o bootstrap
import BotaoImagem from "../images/botoes/botao_ajuda.png";
import '../styles/MainStyle.css';

//https://www.w3docs.com/snippets/css/how-to-change-the-style-of-the-title-attribute-inside-an-anchor-tag.html

export default function BotaoAjuda(props){

    let [clique, novoClique] = useState({clicou: false});

    const frases = [
       // <h3 id="explicacao">Um mago de gelo prendeu vários animais dentro daquele globo de neve mágico. Você deve rotacionar as formas escuras para formar a silhueta de cada animal e assim libertá-los do encantamento.</h3>, //frase de orientação para o jogo do laboratorio
       <h3 id="explicacao">Um mago de gelo prendeu um animal dentro daquele globo de neve mágico. Para quebrá-lo, você deve clicar nas peças pretas para rotacioná-las e assim formar a silhueta de dois animais. A silhueta do segundo animal aparecerá depois que você formar a do primeiro.</h3>,
        <h3 id="explicacao">Parece que o amuleto que faz a torre do relógio funcionar se desmontou. Você deve ajudar Magus à procurar as peças em meio aos objetos e arrastar cada uma para o centro da parede, onde será montado o amuleto.</h3>,  //frase de orientacao para o jogo torre do relógio
        <h3 id="explicacao">Tudo indica que as engrenagens que faziam o moinho funcionar saíram de seus eixos. Você deve ajudar os fazendeiros do reino à consertar o moinho movendo as engrenagens de volta para seus respectivos eixos (ou encaixes).</h3>,//frase de orientação para o jogo do moinho
        <p id="sair">Clique no botão de ajuda novamente para sair</p>
    ];

    let estiloBotao = {
        position: "absolute",
        left: "81.590%",
        top: "0.0%",
        height: "16.500%",
        width: "8.500%",
        backgroundImage: `url(${BotaoImagem})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%", 
        backgroundPosition: "center center",
        animationName: "virarPlacaSelecao",
        animationFillMode: "forwards",
        animationDuration: "1s",
        zIndex: 3000
    }

    function ajudar(){
        if(clique.clicou===false){//Se estiver com o valor 'false' e o botão foi clicado, então a caixa de mensagem é aberta!
             document.getElementById("modalAjuda").className ="aparecerCaixaAjuda";
             document.getElementById("divFundo").className = "escurecerFundo2";
             document.getElementById("explicacao").className = "aparecerExplicacao";
             document.getElementById("sair").style.animationName = "aparecerExplicacao";
             props.ctxMain.pararContador=true;
        }else{
             document.getElementById("modalAjuda").className ="desaparecerCaixaAjuda";
             document.getElementById("divFundo").className ="clarearFundo2";
             document.getElementById("explicacao").className ="desaparecerExplicacao";
             document.getElementById("sair").style.animationName= "desaparecerExplicacao";
             
             props.ctxMain.pararContador=false;
        }

        novoClique({clicou: !clique.clicou});
    }

    return(
        <div>
            <div style={estiloBotao} onClick={ ()=>ajudar() } title="botão de ajuda"></div>
          
            <div id="modalAjuda">
                { props.telaAtual=="laboratorio" && (frases[0]) }
                { props.telaAtual=="torreRelogio" && (frases[1])}
                { props.telaAtual=="moinho" && (frases[2])}
                { frases[3] }
            </div>
        
            <div id="divFundo"></div>
        </div>
    );
}



