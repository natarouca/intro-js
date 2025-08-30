// JAVASCRIPT 

// Dentro de um arquivo html, podemos incorporar o script js antes ou depois no body.


// Antes do body, dentro do head

// 1- Lembre-se que o navegador lê e interpreta o código de cima para baixo. 
// 2- Quando o script está dentro do head, o navegador entra dentro do arquivo, processa e executa primeiro o script js, e depois cria a estrutura do html.
// 3- Isso pode tornar o carregamento da página mais lento. 
// 4- Se o script estiver interagindo com algum elemento html, isso vai causar 

// dentro do body, o css e html é carregado primeiro e dps o js.
// Uma linha de comentário, utilizamos duas barras.
// Para trechos de comentários, utiliza-se barra e asteristico.

alert("Olá, mundo");
// Conteúdo do tipo String é dado por "" (aspas). 
// O js não precisa ser compilado, é uma linguagem interpretada.
// É uma linguagem dinâmica
// Tipsgem forte -> o tipo de dado tem que seer declarado explicitamenre. O s não é fortemente tipado.
// Sintaxe é o estudo das regras que regem a construção do código de linguagens de programação.
// reggistro de dados
// registro/estado inicial

var nome = "Nathallya";
var nome = "Nathallya";
let name = "Nathallya";
let NOME = "Ana";
const nomeUsuario = "Nathallya Santos";
let Idade = 20;
// String é uma cadeia de caracteres.
// Var é uma variável global, não importa o escopo
// Palvras reservadas 

//redeclaração de variável (nao precisa do escopo de delcaração -> var, let, const)
// so faz referencia ao nome da variavel qnd é redeclaração
// declara a variavel com o mesmo nome amis de uma vez so que com valores diferentes e sem o tipo de dado declarado somente mudando os valores da variavel
// idade = 41
// nome = "Nathallys"

// leitura de dados
console.log(nomeUsuario);
// O log é um registro. Registre essa variável ou informação no console e apresente para mim.

//Case-sensitive
//O js interpreta as variáveis abaixo como diferentes. A palavra é a mesma, mas a grafia é diferente. Ele reclama quando o 
let idade = 10;
let IDADE = 10;

// Lembre-se que o codigo é lido de cima para baixo.
let valor = "teste";
// Alterando o valor da variável valor

valor = 20;
console.log(typeof valor);
// É um operador utilizado para indicar o tipo de uma variável.

let teste;
console.log(typeof teste);
let testeNull = null;
console.log(testeNull);