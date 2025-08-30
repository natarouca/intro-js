// Operadores de comparação
// São usados para comparar valores
// Tipo de dado: Booleano
// Valores permitidos: Verdadeiro OU falso.

// Operadores mais comuns:
    /*
        > - maior que
        < - menor que 
        >= maior ou igual que 
        <= - menor ou igual que
        == - igualdade restrita --> compara somente o valor do dado, não o tipo de dado. Realiza a conversão de tipo string, e converte para o tipo number. Ele tenta coomparar os valres para o mesmo tipo antes de converter.
        === - igualdade estrita
        = - operador de atribuição de valor.
        != - Diferença com igualdade restrita
        !== - Diferença com igualdade estrita.
    */

let numero = 5;
let numero2 = "5";
let numero3 = 7;

// Maior que
console.log(numero > numero3);

// Menor que 
console.log(numero < numero3);

// Maior ou igual
console.log(5 >= 7);

// Menor ou igual
console.log(9 <= 9);

// Igualdade
console.log(10 == 10);

// Igualdade restrita
console.log(10 == "10");

// Igualdade estrita -> Tanto o tipo de dado quanto o valor tem que ser igual. Resulta em falso.
console.log(11 === "11"); 

// Verdadeiro, porque o tipo de dado e o valor são iguais.
console.log(11 === 11);

//Lembre-se ele: o operador analisa somente o valor dos dados.

// Diferença restrita (diferença restrita) Funciona de maneira similar ao operador de igualdade restrita (==)
console.log(5 != "5");

//Diferença estrita (diferença estrita). Funciona de maneira similar ao operador de igualdade estrita (===)
console.log(5 !== "5");