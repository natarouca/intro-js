// do while - faça enquanto

// Utilizamos o do while quando é necessário executar pelo menos uma vez uma ação antes de verificar uma condição.

// O escopo da estrutura do - while é somente o Do.
// let variavel;
// do {
//     // Bloco de instrução
//     console.log("Executando...");
//     // Executa uma única vez o do e depois entra no looping while para ser analisado e comparado com a condição. Ele decide se retorna ou não a executar o do. Se a condição for atendida, ele é executado novamente.
// } while (condition);


let contador = 0;
do {
    contador++;
    console.log("Número:",  contador);
} while (contador < 5);
l

// let senha;
// console.log(senha);

// do {
//     senha = prompt("Digite a sua senha");
//     // O prompt captura o valor do teclado, e nesse contexto, atribui para a variável senha;
//     console.log(senha);
//     // Exibindo a senha;
// } while (senha !== "1234"); 
// // Enquanto a senha for estritamente diferente de "1234", ele repetirá o laço infinitamente.