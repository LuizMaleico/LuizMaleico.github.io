class GeradorRandom{
    constructor(){
        this.alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    voucher = "";

    getRandomInt() {
        return this.voucher += Math.floor(Math.random() * 10).toString();
    }
    getRandomLetter(){
        let index = Math.floor(Math.random() * this.alpha.length);
        return this.voucher += this.alpha[index];
    }
    generateVoucher(){
        for(let i=0; i<7; ++i){
            switch (Math.floor(Math.random() * 2)) {                
                case 0:
                    this.getRandomInt();
                break;
                case 1:
                    this.getRandomLetter();
                break;
                default:
                    break;
            }
        }
        return this.voucher;
    }
}

function gerarVoucher(){
    const gerador = new GeradorRandom();
    let voucherGerado = gerador.generateVoucher();

    document.getElementById('resultado').value = voucherGerado;
}