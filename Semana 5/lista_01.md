# Instruções

- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 6 questões objetivas assinalando a alternativa correta
- Resolva as 4 questões dissertativas escrevendo no próprio arquivo .md
  - lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com ChatGPT e afins: entregar algo só para ganhar nota não faz você aprender e ficar mais inteligente. Não seja dependente da máquina!
- ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas

**1)** O que o código a seguir faz?

![Uma imagem](assets/ex01.PNG)

Escolha a opção que responde corretamente:

~~a) Imprime os números pares de 1 a 10.~~

~~b) Imprime os números ímpares de 1 a 10.~~

c) Imprime os números pares de 2 a 10.

~~d) Imprime os números ímpares de 2 a 10.~~

______

**2)** Identificar a linha que falta no código para criar uma classe Veiculo com atributo marca, e uma classe Carro que herda de Veiculo com um método ligar(). 

![Uma imagem](assets/ex02.PNG)

No lugar onde está escrito “// linha” qual das opções abaixo deve estar para funcionar corretamente o código?

A) let carro = new Carro("Toyota");

~~B) let ligar = new ligar("Toyota");~~

~~C) class Moto extends Veiculo {};~~

~~D) carro1.ligar();~~

______

**3)** Qual é o valor de resultado após a execução deste código?

![Uma imagem](assets/ex03.PNG)

Escolha a opção que responde corretamente:

A) 18

~~B) 16~~

~~C) 14~~

~~D) 12~~

______

**4)** Como você criaria um método `acelerar()` em uma classe `Carro`, que recebe um parâmetro `velocidade` e o adiciona a um atributo `velocidadeAtual`?

A) ![Uma imagem](assets/ex04_1.PNG)

~~B) ![Uma imagem](assets/ex04_2.PNG)~~

~~C) ![Uma imagem](assets/ex04_3.PNG)~~

~~D) ![Uma imagem](assets/ex04_4.PNG)~~

______

**5)** Qual a forma correta de definir uma classe Carro em JavaScript, com um método ligar() e um atributo marca?

A) ![Uma imagem](assets/ex05_1.PNG)

~~B) ![Uma imagem](assets/ex05_2.PNG)~~

~~C) ![Uma imagem](assets/ex05_3.PNG)~~

~~D) ![Uma imagem](assets/ex05_4.PNG)~~

______

**6)** Observe o código abaixo:

![Uma imagem](assets/ex06.PNG)

Qual será a saída do código acima?

A) "Olá, meu nome é João. Olá, meu nome é Maria."

~~B) "Olá, meu nome é ."~~

~~C) "João Maria"~~

~~D) "undefined undefined"~~

______

# Questões dissertativas

**7)**

```javascript
// Deff a classe Animal
class Animal {
    // Construtor da classe com os atributos nome e idade
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    // Método para descrever o animal
    descrever() {
      console.log(`Esse ${this.nome}, tem ${this.idade} anos e é uma gracinha`);
    }
  }
  
  // Cria objetos da classe Animal
  const cachorro = new Animal("Cachorro", 9);
  const gato = new Animal("Gato", 324);
  
  // Chama o método descrever para cada animal
  cachorro.descrever();
  gato.descrever();
```

______

**8)** 
```javascript
// DefF a classe Animal
class Animal {
    // Construtor da classe com os atributos nome e idade
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    // Método para descrever o animal
    descrever() {
      console.log(`Esse ${this.nome}, tem ${this.idade} anos e é uma gracinha`);
    }
  }
  
  // Deff a classe Gato que herda de Animal
  class Gato extends Animal {
    // Construtor da classe Gato add o atributo cor
    constructor(nome, idade, cor) {
      super(nome, idade); // Chamando o construtor da classe Animal
      this.cor = cor;
    }
  
    // Método para gatos miau
    miar() {
      console.log(`Esse ${this.nome} ${this.cor} faz Miau!`);
    }
  }
  
  // Criando objetos das classes Animal e Gato
  const cachorro = new Animal("Cachorro", 92);
  const gato = new Gato("Gato", 3, "Arco-íris");
  
  // Chamando o método descrever
  cachorro.descrever();
  gato.descrever();
  
  // Chamando o método miar
  gato.miar();
```
  


______

**9)** 
```javascript
// Deff classe SomadorDeNotas
class SomadorDeNotas {
    // Construtor da clas com o atributo do total
    constructor() {
      this.total = 0;
    }
    // Método para add notas no total
    adicionarNota(nota) {
      this.total += nota;
    }
    // Método para mostrar o total das notas
    verTotal() {
      console.log(`Total das notas: ${this.total}`);
    }
  }
  
  // Cria um objeto da classe SomadorDeNotas
  const somador = new SomadorDeNotas();
  
  // Add  notas ao somador
  somador.adicionarNota(10);
  somador.adicionarNota(3);
  somador.adicionarNota(6);
  somador.adicionarNota(2);
  
  // Chama o método vertotal pra ver o tot das notas
  somador.verTotal();
  ```


______

**10)** 


```javascript
// Deff a classe Funcionário
class Funcionario {
    // Construtor de class com tds os atributos dos funcionários
    constructor(nome, idade, salarioBas) {
      this.nome = nome;
      this.idade = idade;
      this.salarioBas = salarioBas;
    }
  
    // Método pra calc o salário
    calcularSalario() {
    }
  }
  
  // Deff classe Professor que herda de Funcionário
  class Professor extends Funcionario {
    // Construtor da class Professor
    constructor(nome, idade, salarioBas, disciplina, hAulaSem) {
      super(nome, idade, salarioBas); 
      this.disciplina = disciplina;
      this.hAulaSem = hAulaSem;
    }
  
    // Sobrescrevendo o método calcularSalario pra profs
    calcularSalario() {
      const valorHoraAula = 3;
      const salarioProfessor = this.hAulaSem * valorHoraAula;
      return this.salarioBas + salarioProfessor;
    }
  }
  
  // Cria dois objetos do tipo Professor com info
  const professor1 = new Professor("Solrac", 13, 900, "Matemática", 20);
  const professor2 = new Professor("Carlos", 24, 200, "História", 15);
  
  // Chamando o método calcularSalario para cada prof
  console.log(`${professor1.nome}: Salário total - ${professor1.calcularSalario()} reais`);
  console.log(`${professor2.nome}: Salário total - ${professor2.calcularSalario()} reais`);
  
```
