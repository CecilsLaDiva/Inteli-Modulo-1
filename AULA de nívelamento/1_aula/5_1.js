let despesasAluguel = 1000;
let despesasAgua= 50;
let despesasLuz = 80;
let despesasInternet = 60;
let orcamentoMensal = 1200

let totalDespesas = despesasInternet + despesasLuz + despesasAgua + despesasAluguel;

console.log(totalDespesas > orcamentoMensal);

if(totalDespesas){
console.log("Vc tá falindo");
}
else {
    console.log("Você conseguiu! Não vai morrer de fome");
}