import React, { Component } from 'react';
import MoinhoFundo from '../images/backgrounds/moinho.png';
import '../styles/MoinhoStyle.css';


/* 
import {ReactComponent as EngRightTop} from '../images/Engrenagens/engrenagem1.svg';
import {ReactComponent as EngRightMiddle} from '../images/Engrenagens/engrenagem2.svg';
import {ReactComponent as EngRightBottom} from '../images/Engrenagens/engrenagem3.svg';
import {ReactComponent as EngLeftTop} from '../images/Engrenagens/engrenagem4.svg';
import {ReactComponent as EngLeftMiddle} from '../images/Engrenagens/engrenagem5.svg';
import {ReactComponent as EngLeftBottom} from '../images/Engrenagens/engrenagem6.svg';
*/

//import {ReactComponent as EngLeftTop} from '../images/moinho/Engrenagens/eixoCirculo.svg';

class Moinho extends Component{

  constructor(props){
    super(props);

    this.ctxMain = props.contextoMain;

    this.state = {
        eventosAplicados: false,
        distsXY: {top: 0, left: 0},

        engrenagens: {
              engLeftCircle:  {top: 18+"%", left: 4+"%"}, //left top
              engLeftTriangle: {top: 45+"%", left: 0.3+"%"}, //left middle
              engLeftTriangle2:  {top: 71.6+"%", left: 4+"%"}, //left bottom

              engRightCircle:  {top: 18+"%", left: 79+"%"}, //right top
              engRightDiamond:  {top: 45+"%", left: 83.6+"%"}, //right middle
              engRightDiamond2:  {top: 71.6+"%", left: 78+"%"}  //right bottom
        },
        
        encaixes: {
              encaiCirculo: {top: 72+"%", left: 53.7+"%"},//circ inferior direito
              encaiQuadrado: {top: 81+"%", left: 27+"%"},//quad inferior esquerdo
              encaiTriangulo: {top: 66.7+"%", left: 39+"%"},//trian baixo

              encaiCirculo2: {top: 24.0+"%", left: 63.7+"%"},//circ superior direito
              encaiQuadrado2: {top: 49+"%", left: 60+"%"},//quad mediano direito
              encaiTriangulo2: {top: 11+"%", left: 51+"%"}//trian topo
        }
    }
  }
 

  calcPorcentagem=(coscLeft, coscTop)=>{//calcula a porcentagem a partir da posicao do elemento
      coscLeft = coscLeft.replace('px','');
      coscTop = coscTop.replace('px','');

      let left = parseFloat(coscLeft);
      let top = parseFloat(coscTop);

      alert("Left: "+(left/window.innerWidth).toFixed(2)+"// top: "+(top/window.innerHeight).toFixed(2));
  }



  analisarEncaixe =(engrenagem)=>{//recebendo engrenagem que foi agarrada
      let encaixes  = document.getElementsByClassName("encaixe");

      /* 
       encaixes[0] corresponde à encaiCirculo  (inferior)
       encaixes[1] corresponde à encaiQuadrado  (inferior esquerdo)
       encaixes[2] corresponde à encaiTriangulo  (inferior)
       encaixes[3] corresponde à encaiCirculo2    (superior)
       encaixes[4] corresponde à encaiQuadrado2    (altura mediana e à direita)
       encaixes[5] corresponde à encaiTriangulo2     (superior)
      */
       engrenagem.classList.remove("leftCircleOriginalPlace");
       engrenagem.classList.remove("leftTrinagleOriginalPlace");
       engrenagem.classList.remove("leftTriangle2OriginalPlace");
       engrenagem.classList.remove("rightCircleOriginalPlace");
       engrenagem.classList.remove("rightDiamondOriginalPlace");
       engrenagem.classList.remove("rightDiamond2OriginalPlace");


       switch(engrenagem.getAttribute('id')){

            /* AJUSTANDO ENGRENAGENS NOS SEUS RESPECTIVOS ENCAIXES, CASO ELES SE COLIDEM */
           case 'engLeftCircle':
              if( this.isCollide(engrenagem, encaixes[0]) ){ //ENCAIXE CIRCULAR INFERIOR
                    //engrenagens.classList.remove("encaixes");
                    //engrenagem.classList.add(""+encaixes[0].getAttribute('id'));
                    this.setState({  engrenagens: { ...this.state.engrenagens, engLeftCircle:  {top: 62.4+"%", left: 48.4+"%"}} })

              }else if( this.isCollide(engrenagem, encaixes[3]) ){ //EXCAIXE CIRCULAR SUPERIOR
                    this.setState({  engrenagens: { ...this.state.engrenagens, engLeftCircle:  {top: 14.3+"%", left: 58.3+"%"}} })
              
              }else if( this.isCollide(engrenagem, encaixes[1]) ||  this.isCollide(engrenagem, encaixes[2]) ||
                       this.isCollide(engrenagem, encaixes[4]) || this.isCollide(engrenagem, encaixes[5]) ){
                       engrenagem.classList.add("leftCircleOriginalPlace");
                       this.setState({ engrenagens: { ...this.state.engrenagens, engLeftCircle: {top: null, left: null}} });//atribuindo valores nulos para que a nova classe atribuída à engrenagem seja executada
              }
           break;

          
           case 'engLeftTriangle':
              if( this.isCollide(engrenagem, encaixes[2]) ){  //ENCAIXE TRIANGULAR INFERIOR
                    this.setState({  engrenagens: { ...this.state.engrenagens, engLeftTriangle:  {top: 56.8+"%", left: 33.7+"%"}} })

              }else if( this.isCollide(engrenagem, encaixes[5]) ){   //ENCAIXE TRIANGULAR SUPERIOR
                    this.setState({  engrenagens: { ...this.state.engrenagens, engLeftTriangle:  {top: 1+"%", left: 45.7+"%"}} })
              
              }else if( this.isCollide(engrenagem, encaixes[0]) ||  this.isCollide(engrenagem, encaixes[1]) ||
                      this.isCollide(engrenagem, encaixes[3]) || this.isCollide(engrenagem, encaixes[4]) ){
                      engrenagem.classList.add("leftTriangleOriginalPlace");
                      this.setState({ engrenagens: { ...this.state.engrenagens, engLeftTriangle: {top: null, left: null}} });
              }
           break;


           case 'engLeftTriangle2':
                if( this.isCollide(engrenagem, encaixes[2]) ){ //ENCAIXE TRIANGULAR INFERIOR
                  this.setState({  engrenagens: { ...this.state.engrenagens, engLeftTriangle2:  {top: 56.8+"%", left: 33.7+"%"}} })

                }else if( this.isCollide(engrenagem, encaixes[5]) ){ //ENCAIXE TRIANGULAR SUPERIOR
                      this.setState({  engrenagens: { ...this.state.engrenagens, engLeftTriangle2:  {top: 1+"%", left: 45.7+"%"}} })
                
                }else if( this.isCollide(engrenagem, encaixes[0]) ||  this.isCollide(engrenagem, encaixes[1]) ||
                       this.isCollide(engrenagem, encaixes[3]) || this.isCollide(engrenagem, encaixes[4]) ){
                       engrenagem.classList.add("leftTriangle2OriginalPlace");
                       this.setState({ engrenagens: { ...this.state.engrenagens, engLeftTriangle2: {top: null, left: null}} });
                }
           break;


           /* AJUSTANDO ENGRENAGENS NOS SEUS RESPECTIVOS ENCAIXES, CASO ELES SE COLIDEM */
           case 'engRightCircle':
              if( this.isCollide(engrenagem, encaixes[0]) ){   //EXCAIXE CIRCULAR INFERIOR
                    this.setState({  engrenagens: { ...this.state.engrenagens, engRightCircle: {top: 62.4+"%", left: 48.4+"%"}} })

              }else if( this.isCollide(engrenagem, encaixes[3]) ){  //EXCAIXE CIRCULAR SUPERIOR
                    this.setState({  engrenagens: { ...this.state.engrenagens, engRightCircle:  {top: 14.3+"%", left: 58.3+"%"}} })
              
              }else if( this.isCollide(engrenagem, encaixes[1]) ||  this.isCollide(engrenagem, encaixes[2]) ||
                    this.isCollide(engrenagem, encaixes[4]) || this.isCollide(engrenagem, encaixes[5]) ){
                    engrenagem.classList.add("rightCircleOriginalPlace");
                    this.setState({ engrenagens: { ...this.state.engrenagens, engRightCircle: {top: null, left: null}} });
              }
           break;


           case 'engRightDiamond':
              if( this.isCollide(engrenagem, encaixes[1]) ){  //EXCAIXE DE LOSANGO À ESQUERDA
                    this.setState({  engrenagens: { ...this.state.engrenagens, engRightDiamond:  {top: 71.5+"%", left: 21+"%"}} })

              }else if( this.isCollide(engrenagem, encaixes[4]) ){ //EXCAIXE DE LOSANGO À DIREITA
                    this.setState({  engrenagens: { ...this.state.engrenagens, engRightDiamond:  {top: 40+"%", left: 54+"%"}} })
              
              }else if( this.isCollide(engrenagem, encaixes[0]) ||  this.isCollide(engrenagem, encaixes[2]) ||
                    this.isCollide(engrenagem, encaixes[3]) || this.isCollide(engrenagem, encaixes[5]) ){
                    engrenagem.classList.add("rightDiamondOriginalPlace");
                    this.setState({ engrenagens: { ...this.state.engrenagens, engRightDiamond: {top: null, left: null}} });
              }
           break;


           case 'engRightDiamond2':
              if( this.isCollide(engrenagem, encaixes[1]) ){  //EXCAIXE DE LOSANGO À ESQUERDA
                    this.setState({  engrenagens: { ...this.state.engrenagens, engRightDiamond2:  {top: 71.5+"%", left: 21+"%"}} })

              }else if( this.isCollide(engrenagem, encaixes[4]) ){  //EXCAIXE DE LOSANGO À DIREITA
                    this.setState({  engrenagens: { ...this.state.engrenagens, engRightDiamond2:  {top: 40+"%", left: 54+"%"}} })
              
              }else if( this.isCollide(engrenagem, encaixes[0]) ||  this.isCollide(engrenagem, encaixes[2]) ||
                     this.isCollide(engrenagem, encaixes[3]) || this.isCollide(engrenagem, encaixes[5]) ){
                     engrenagem.classList.add("rightDiamond2OriginalPlace");
                     this.setState({ engrenagens: { ...this.state.engrenagens, engRightDiamond2: {top: null, left: null}} });
              }
           break;
       }
    
  }


  isCollide(engrenagem, encaixe){
        let aRect = engrenagem.getBoundingClientRect();
        let bRect = encaixe.getBoundingClientRect();
    
        return !(
          ((aRect.top + aRect.height) < (bRect.top)) ||
          (aRect.top > (bRect.top + bRect.height)) ||
          ((aRect.left + aRect.width) < bRect.left) ||
          (aRect.left > (bRect.left + bRect.width))
       );
  }



  arrastar=(event)=>{
      //event.dataTransfer.setData("text/plain", event.target.id); 
      let X = (event.clientX - event.target.offsetLeft);
      let Y = (event.clientY - event.target.offsetTop);

      this.setState({distsXY: {top: Y, left: X}});
  }
  
  arrastando=(event)=>{
     // event.preventDefault();
  }

  arrastou =(event)=>{
      let newLeft = (event.clientX - this.state.distsXY.left);
      let newTop = (event.clientY - this.state.distsXY.top);
      
     /* console.log("id: "+event.currentTarget.id);
      console.log("id: "+event.target.id);
      console.log("id: "+event.target.getAttribute('id')); */

      //console.log("id: "+event.id); //Nao funciona
      //console.log("id: "+event.dataTransfer.getData("text/plain")); //nao funciona
      //console.dir(JSON.stringify(this.state, null, 4));

      let nLeft = ""+newLeft+"px";
      let nTop = ""+newTop+"px";
    

      switch(event.target.getAttribute('id')){
        
        ///-------------ENGRENAGENS DA ESQUERDA-----------------------------------------
            case 'engLeftCircle':
                  this.setState({
                     engrenagens: {
                           ...this.state.engrenagens,
                           engLeftCircle:  {top: nTop, left: nLeft}
                       }
                  });

                  //this.calcPorcentagem(nLeft, nTop);
            break;


            case 'engLeftTriangle':
                  this.setState({
                      engrenagens: {
                        ...this.state.engrenagens,
                         engLeftTriangle:  {top: nTop, left: nLeft}
                      }
                  });
                  //this.calcPorcentagem(nLeft, nTop);
            break;
                  

            case 'engLeftTriangle2':
                  this.setState({
                      engrenagens: {
                        ...this.state.engrenagens,
                         engLeftTriangle2: {top: nTop, left: nLeft}
                      }
                  });
                  //this.calcPorcentagem(nLeft, nTop);
            break;
        ///-----------------------------------------------------
      

            
             case 'engRightCircle':
                  this.setState({
                        engrenagens: {
                          ...this.state.engrenagens,
                          engRightCircle:  {top: nTop, left: nLeft}
                        }
                  });
                  //this.calcPorcentagem(nLeft, nTop);
             break;


             case 'engRightDiamond':
                  this.setState({
                      engrenagens: {
                        ...this.state.engrenagens,
                        engRightDiamond:  { top: nTop, left: nLeft}
                      }
                  });
                  //this.calcPorcentagem(nLeft, nTop);
             break;
                  

             case 'engRightDiamond2':
                  this.setState({
                      engrenagens: {
                        ...this.state.engrenagens,
                        engRightDiamond2:  {top: nTop, left: nLeft}
                      }
                  });
                  //this.calcPorcentagem(nLeft, nTop);
             break;

             default: 
                  alert("nada foi selecionado"); break;
      }
      
      //verificarEncaixe(evt, this);

      this.analisarEncaixe(document.getElementById(event.target.getAttribute('id')));
      event.preventDefault();
  }


  

  componentDidMount(){
    //alert(JSON.stringify(this.state));

    if(!this.state.eventosAplicados){
         let elementos = document.getElementsByClassName('engrenagem');

         Object.values(elementos).forEach( (eng) =>{
            if(eng.className === "engrenagem"){
                
                eng.addEventListener("dragstart", this.arrastar);
                eng.addEventListener("drag", this.arrastando);
                eng.addEventListener("dragend", this.arrastou);
            }
       
       
          });

        this.setState({eventosAplicados: true});
    }

    
  }
 

  render(){
      const reajustarTela = require("../funcoesGerais.js");

      let engrenagensEncaixes = [
          //RIGHT GEARS
          <div id="engLeftCircle" style={this.state.engrenagens.engLeftCircle} className="engrenagem" draggable="true"> 
          </div> 
          ,
          <div id="engLeftTriangle" style={this.state.engrenagens.engLeftTriangle} className="engrenagem" draggable="true">
          </div>
          ,
          <div id="engLeftTriangle2" style={this.state.engrenagens.engLeftTriangle2} className="engrenagem" draggable="true">            
          </div>
          ,
          //LEFT GEARS
          <div id="engRightCircle" style={this.state.engrenagens.engRightCircle} className="engrenagem" draggable="true">        
          </div>
          ,
          <div id="engRightDiamond" style={this.state.engrenagens.engRightDiamond} className="engrenagem" draggable="true"> 
          </div>
          ,
          <div id="engRightDiamond2" style={this.state.engrenagens.engRightDiamond2} className="engrenagem" draggable="true">  
          </div>
          ,
          <img draggable="false" src={MoinhoFundo}  style={reajustarTela()}  alt="Moinho visao interna" />
          ,
     

          //ENCAIXE PARA CADA ENGRENAGEM:
          <div id="encaiCirculo" style={this.state.encaixes.encaiCirculo} className="encaixe" ondrop>  
          </div>
          ,
          <div id="encaiQuadrado" style={this.state.encaixes.encaiQuadrado} className="encaixe" >  
          </div>
          ,
          <div id="encaiTriangulo" style={this.state.encaixes.encaiTriangulo} className="encaixe" >  
          </div>
          ,
          <div id="encaiCirculo2" style={this.state.encaixes.encaiCirculo2} className="encaixe" >  
          </div>
          ,
          <div id="encaiQuadrado2" style={this.state.encaixes.encaiQuadrado2} className="encaixe" >  
          </div>
          ,
          <div id="encaiTriangulo2" style={this.state.encaixes.encaiTriangulo2} className="encaixe" >  
          </div>
        ]


      return (
         <div>
               {engrenagensEncaixes}  
         </div>
      );
  }
}

export default Moinho;