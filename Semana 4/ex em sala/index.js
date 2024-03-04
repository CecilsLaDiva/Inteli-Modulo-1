class Carro {
    constructor (marca, modelo, ano, cor, preco) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.preco = preco;
    }

    descricao() {
        console.log("Este é um", this.marca, "-", this.modelo, "ano", this.ano, ", na cor", this.cor, "e custa R$", this.preco);
    }   
}

class CarroNovo extends Carro {
    constructor (marca, modelo, ano, cor, preco, garantia) {
        super(marca, modelo, ano, cor, preco);
        this.garantia = garantia;
    }

    ofertaEspecial() {
        console.log("Aproveite nossa oferta especial para novo", this.marca, "-", this.modelo, "! Por apenas R$", this.preco - 500, "você leva o carro com", this.garantia, "de garantia!")
    };
}

let carro = new Carro("Fiat", "Uno", 2000, "vermelho", 8000);
carro.descricao();

let carroNovo = new CarroNovo("Volkswagen", "Fox", 2010, "vermelho", 30000, "3 anos");
carroNovo.ofertaEspecial();