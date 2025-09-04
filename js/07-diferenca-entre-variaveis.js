


// Diferença entre variáveis.

// Var é um elemento global, que pode ser acessado em qualquer lugar do código, independente do contexto em que ela foi declarada. 
// Let é uma variável de escopo que pode ser acessada somente dentro do bloco de código onde foi definida.

if (true) {

    // Const e let são variáveis de escopo, ou seja, só é possível acessar e interagir com os valores desses elementos dentro do bloco onde elas foram inicializadas.
    let fruta = "maçã";

    const massa = "macarrão";
    var bebida = "suco";

    console.log("------- Início da estrutura condicional --------");
    console.log("Dentro do if");
    console.log("let", fruta);
    console.log("const", massa);
    console.log("var", bebida);
    console.log("------ Fim da estrutura condicional -------");
}
console.log("------- Escopo de código comum --------")
console.log(fruta);
console.log(massa);
console.log(bebida);


