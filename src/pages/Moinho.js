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
              engLeftCircle:  {top: 22+"%", left: 3+"%"}, //left top
              engLeftTriangle: {top: 48+"%", left: 3+"%"}, //left middle
              engLeftTriangle2:  {top: 74+"%", left: 3+"%"}, //left bottom

              engRightCircle:  {top: 22+"%", left: 82+"%"},  //right top
              engRightDiamond:  {top: 48+"%", left: 82+"%"}, //right middle
              engRightDiamond2:  {top: 74+"%", left: 82+"%"}  //right bottom
        },
        
        encaixes: {
              encaiCirculo: {top: 82+"%", left: 27+"%"},
              encaiQuadrado: {top: 68+"%", left: 39+"%"},
              encaiTriangulo: {top: 44+"%", left: 32+"%"},

              encaiCirculo2: {top: 30+"%", left: 43+"%"},
              encaiQuadrado2: {top: 27+"%", left: 60+"%"},
              encaiTriangulo2: {top: 10+"%", left: 67+"%"}
        }
    }
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

                  console.log("nLeft: "+nLeft+"// nTop: "+nTop);
            break;


            case 'engLeftTriangle':
                  this.setState({
                      engrenagens: {
                        ...this.state.engrenagens,
                         engLeftTriangle:  {top: nTop, left: nLeft}
                      }
                  });
                  console.log("nLeft: "+nLeft+"// nTop: "+nTop);
            break;
                  

            case 'engLeftTriangle2':
                  this.setState({
                      engrenagens: {
                        ...this.state.engrenagens,
                         engLeftTriangle2: {top: nTop, left: nLeft}
                      }
                  });
                  console.log("nLeft: "+nLeft+"// nTop: "+nTop);
            break;
        ///-----------------------------------------------------
      

            
             case 'engRightCircle':
                  this.setState({
                        engrenagens: {
                          ...this.state.engrenagens,
                          engRightCircle:  {top: nTop, left: nLeft}
                        }
                  });
                  console.log("nLeft: "+nLeft+"// nTop: "+nTop);
             break;


             case 'engRightDiamond':
                  this.setState({
                      engrenagens: {
                        ...this.state.engrenagens,
                        engRightDiamond:  { top: nTop, left: nLeft}
                      }
                  });
                  console.log("nLeft: "+nLeft+"// nTop: "+nTop);
             break;
                  

             case 'engRightDiamond2':
                  this.setState({
                      engrenagens: {
                        ...this.state.engrenagens,
                        engRightDiamond2:  {top: nTop, left: nLeft}
                      }
                  });
                  console.log("nLeft: "+nLeft+"// nTop: "+nTop);
             break;

             default: 
                  alert("nada foi selecionado"); break;
      }
      
      //verificarEncaixe(evt, this);
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
          <div id="encaiCirculo" style={this.state.encaixes.encaiCirculo} className="encaixe" >  
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