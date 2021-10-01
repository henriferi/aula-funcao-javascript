/* 
1) Criar uma função para receber dois parâmetros: numero e percentual.
a) Calcular a porcentagem de um número  usando a fórmula:
b) Chamar a função e exibir o resultado no console. 
*/

function calcular(numero, percentual){
    let resultado = (numero/100)*percentual;
    console.log(`Resultado: ${resultado}.`);
}
console.log(calcular(10,5));

/*
2) Criar uma função que recebe dois arrays como parâmetro e juntar os arrays:
a) Converter o array para string e retornar o resultado.
b) Chamar a função e exibir o resultado no console. 
*/

let primeiro = ["carro", "moto", "onibus"];
let segundo = ["barco", "jetsky", "navio"];
let juntos = primeiro.concat(segundo);
let transform = juntos.join(", ");

let juntar = function(valor1,valor2){
    console.log(valor1,valor2)
}
console.log(juntar(transform));
