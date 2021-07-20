import React from 'react';
import {ReactComponent as Selecao} from '../images/backgroundSelecao/backgroundSelecaoSVG.svg';
//import styles from '../styles/BackgroundStyle.css';
import '../styles/SelecaoStyle.css';

export default function SelecaoGames(){

  

   return (
      <div>
            <div className="boasVindas"> 
                <h2>Bem-vindo(a) ao reino <br/> de Pragnäz!</h2> 
            </div>

            <button className="torreIgreja"><span>Torre da igreja</span></button>
            
            <button className="laboratorio"><span>Laboratório</span></button>

            <button className="moinho"><span>Moinho</span></button>

            <div className="boxDescricao">
                <h3 id="descriptionText">Navegue pelas redondezas do reino para desvendar seus mistérios e completar seus desafios.</h3>
            
                <div id="personagem"></div>
            </div>
      
            <Selecao className="imagemDeFundo"/>
      </div>);
}