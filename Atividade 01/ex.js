/* 
1) Criar uma função que exibe no console um array com os nomes de 3 estados da região Norte do Brasil:
a) Ordenar os elementos do array na ordem invertida 
*/
let estados = function(){
    let norte = ["Pará", "Amazonas", "Amapá"]
    norte.reverse()
    console.log(norte)
}
console.log(estados())

/* 
2) Criar uma função que recebe duas strings:
a) Transformar todas as letras em maiúsculas do primeiro parâmetro usando toUpperCase().
b) Concatenar as duas strings e retornar o resultado.
c) Chamar a função e exibir no console o resultado. 
*/

function parte2 (valor1, valor2) {
    let valor1M = valor1.toUpperCase();
    return valor1M + valor2
}
console.log(parte2("Olá Mundo", " Mundo ola"))

/* 
3) Criar uma função que retorne 17 vezes a palavra Repetição.
a) Chamar a função e exibir no console o resultado. 
*/
function repetir () {
    for(palavra = 1; palavra < 18; palavra++) {
        if(palavra >= 0) {
        console.log("Repetição");
        }
    }
}   
console.log(repetir())