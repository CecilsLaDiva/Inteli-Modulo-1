class Carro {
    constructor(marca,modelo,ano,cor,preco) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.cor = cor;
      this.preco = preco;
    }
  
    saudacao() {
      console.log("O carro ", this.marca, "//", this.modelo, "de", this.ano, "na cor", this.cor, "saindo por", this.preco);
    }
  }
  
  // Criando um objeto "pessoa" usando a classe Pessoa
let pessoa1 = new Pessoa("João", 25);
 pessoa1.saudacao(); // Saída: Olá! Meu nome é João e tenho 25 anos.

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
      super(nome, idade); // Chama o construtor da classe Pai (Pessoa)
      this.curso = curso;
    }
  
    info() {
      console.log(${this.nome} está estudando ${this.curso}.);
    }
  }
  
  let estudante1 = new Estudante("Maria", 20, "Ciência da Computação");
  estudante1.saudacao(); // Saída: Olá! Meu nome é Maria e tenho 20 anos.
  estudante1.info(); // Saída: Maria está estudando Ciência da Computação.