// Condicional encadeada 

// Na estrutura condicional encadeada, analisa-se mais de uma condição/possibilidade.
// Lembre-se que o js lê e percorre de cima para baixo cada instrução da condicional e faz comparativos.
// Se uma das condições estabelecidas for verdadeira, o JavaScript executa o bloco de instrução que pertence a condição atendida, ignorando as demais. 

let idade = 18;
if (idade >= 18) {
    console.log("Maior de idade");
} else if (idade > 60) {
    console.log("Idoso");
}
else if (idade < 18) {
    console.log("Menor de idade");
} else {
    console.log("Quantos anos você tem?");
}


let nota = 4.9;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Bom");
} else if (nota >= 5) {
    console.log("Regular");
} else {
    console.log("Reprovado");
}
