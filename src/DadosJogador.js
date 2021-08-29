module.exports = global.DadosJogador = {
    namePlayer: "",
    tempoTorreIgreja: [0, 0],
    tempoMoinho: [0, 0],
    tempoLaboratorio: [0, 0],

    getTempoTorre: function(){
        return this.tempoTorreIgreja;
    },

    getTempoMoinho: function(){
        return this.tempoMoinho;
    },

    getTempoLaboratorio: function(){
        return this.tempoLaboratorio;
    },

    setTempoTorre: function(tempo){
        this.tempoTorreIgreja = tempo;
    },

    setTempoMoinho: function(tempo){
       this.tempoMoinho = tempo;
    },

    setTempoLaboratorio: function(tempo){
        this.tempoLaboratorio = tempo;
    }
}
