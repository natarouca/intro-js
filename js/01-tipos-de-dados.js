// Dados primitivos (básicos)
// Ddados primitivos são os dados mais básicos e fundamentais das linguagens de programação.

// String
// É uma sequência de caracteres. Pode-se utilizar aspas duplas ou aspas simples.
// Podemos lidar com cadeias de caracteres dentro de consoles.
let saudacao = "Bom dia!";
let email = 'usuario@gmail.com';
console.log("Olá!");
// Ponto é um operador utilizado para acessar uma propriedade ou método de um objeto.


// Números

const inteiro = 5;
const inteiroNegativo = -5;
const decimal = 10.50;

let n1 = 0.1;
let n2 = 0.7;
console.log(n1 + n2);


// Undefined - indefinido. Uma variável não possiui valor. Significa que ela nao foi iniicalizasda, ou seja, não possui um valor inicial.

let semValor;
console.log(semValor);
semValor = "Valor";
console.log(semValor);
// Const precisam obrigatoriamente ser inicializadas.
// const valor; --> Isso aqui não funciona.

// Null --> Representa a ausência intencional de valor. Está vazio, mas isso já é esperado. A pricnpio a variavel é vazia ou nulo, possui um estdo incilal vazio.


let nulo = null;


// Symbol -> Símbolo. Usado para criar identifisdross unicos (por xemplo os ID's ou hash). cada symbol é UNICO e imutavek .É uma funççao metodo pronto, q ja foi cosgnrruid no js 

// Intsanciar/declarar é quando eu inivio um elemtno.

let simbol = Symbol()
console.log(simbol);
let simbolo2 = Symbol("id"); 
//  por baixo dos panos ele faz isso, cria um hash cndnvfndvsvs

let usuario = simbolo2;
console.log(usuario);


// Big int
// Ele possui u limite de numeros inteiros. lida co,m numeros grandes e extensos.

let numeroGrande = 5444353533n;
