
// O while é um laço condicional que executa uma ação enquanto a condição estabelecida for verdadeira.
// while (condição) {
//  Bloco de código a ser executado    
// }
/* 
    enquanto (condição) {
    
    }
*/


// Exemplo de um loop infinito/eterno
// let contador = 0;
// O valor do contador nunca mudará, logo a condição sempre vai ser verdadeira. 

/*
while (contador < 5) {
    console.log("Código proibido");
}
 */
/*
while (contador === 0) {
    console.log("Código proibido");
}
 */


while (contador <= 5)  {
    // Concatenação (dado pelo operador +)
    // Nesse conetxto o operador de soma se torna um operdor de concatenação, unindo ou juntando valores.
    // Ele converte tudo para string.
    //  (String + valor da variável)

    // Separador (",")
    // Com o separardor "," ele somente DIVIDE/SEPARA os tipos de dados
    //  console.log("Laço while",contador);
    contador++;
    console.log("Laço while" + contador);
}