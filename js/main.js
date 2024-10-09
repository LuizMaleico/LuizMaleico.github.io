class GeradorRandom{
    constructor(){
        this.max = 10;
    }
    getRandomInt() {
        return Math.floor(Math.random() * this.max);
    }
}

function gerarint(){
    const gerador = new GeradorRandom();
    var numRandom = gerador.getRandomInt(10);

    document.getElementById('resultado').value = numRandom;
    
}