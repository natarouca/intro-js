// Conhecendo a estrutura condicional switch (troca) case (caso)

// É utilizado para testar multíplos valores de uma variável ou expressão.
// Compara de casos/possibilidades fixas

// let variavel;
// switch (expressão/condição) {
//     case valor1:
//      Executa o bloco de instruções se a expressão ou condição for estritamente igual (===) ao valor 1. Se não for, a condição é comparada com o próximo caso.
//         break;

// case valor2:
// Executa este bloco de instruções se (expressão/condição === valor2);
//break;

// default:
// Há um bloco de instruções padrão que é executado automaticamente quando nenhuma das condições é atendida.


// O break para a execução do código que vem na sequência. Isso garante que somente o número escolhido seja exibido.
let dia = 0;

switch (dia) {
    // Caso (value)
    case 1:
        // se for verdadeiro, executa isso aqui e depois para.
        console.log("Domingo");
        break;
    // Caso (value)
    case 2:
        console.log("Segunda-feira");
        break;
    // Caso (value)
    case 3:
        console.log("Terça-feira");
        break;
    // executa e para, rompe a estrutura.
    // Caso (value)
    case 4:
        console.log("Dia inválido");
        break;

    // 
    default:
        console.log("Dia inválido");
}

let operacao = "+";
let a = 5;
let b = 10;

switch (operacao) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;

    case '*':
        console.log(a * b);
        break;

    case '/':
        console.log(a / b);
        break;

    default:
        console.log("Operação inválida");
}