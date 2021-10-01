/* 1)      Criar uma função para receber  uma string como parâmetro:

a)       Contar a quantidade de palavras repetidas em uma frase e retornar o total.

b)      Chamar a função e exibir o resultado no console. */

let frase = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado."
function repetidor(frase){
    let valor = frase.split("que").length - 1;
    console.log(valor);
}
console.log(repetidor(frase));

/* 2)      Criar uma função que receba um array com 5 números como parâmetros:

a)       Inverter o array e retornar o resultado.

b)      Chamar a função e exibir o resultado no console.*/

let numeros = [5,3,7,5,6];
function inverter (valores) {
    valores.reverse();
    console.log(valores);
}
console.log(inverter(numeros));

/* 
3) Criar uma função que receba 4 números inteiros positivos como parâmetros:
a) Calcular a soma de todos os números.
b) Retornar o Resultado.
c) Chamar a função e exibir o resultado no console. 
*/

function num(n1,n2,n3,n4){
    console.log(n1+n2+n3+n4) 
}
    console.log(num(1,2,3,4))