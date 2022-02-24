/*
Luiz otavio miranda tem 30 anos, pesa 84 kg
tem 1.8 de alura e seu IMC é de 25.92592592
Luiz Otávio nasceu em 1980
*/ 
const nome = 'Luiz Otavio Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80
let imc;
let anoNascimento;

imc = peso / (altura*altura);
anoNascimento = 2022 - idade;

console.log('o IMC de', nome,'é', imc, '.');
console.log(nome, 'nasceu em',anoNascimento,'.')
console.log(`${nome} tem ${idade} anos, pesa ${peso} kg.`);
console.log(`tem ${altura} de alura e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
// Diferente maneiras de executar textos