

let carro = {
    nome: 'Fiat',
    modelo: 'Marea Turbo',
    peso: '800kg',
    ligado: false,
    ligar: function() {
        this.ligado=true;
        console.log('Carro está ativo e operante')
    },
    acelerar: function(){
        if( this.ligado===true){
            console.log('Brrrrrrrrrraaaaaan')
        } else {
            console.log(this.nome+" "+this.modelo+" não está ligado.")
        }
        
    }
};

console.log("Modelo: "+ carro.modelo);

carro.acelerar();