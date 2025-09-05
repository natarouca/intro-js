let num = 2;
let nome, email, idade, message;
switch (num) {

    case 1:
        message = "Qual é o seu nome?";
        nome = prompt("Digite seu nome");
        console.log("Seu nome é " + nome);
        alert("Seu nome é " + nome);
        break;
    case 2:
        message = "Qual é a sua idade?";
        idade = prompt("Digite a sua idade");
        console.log("Você tem " + idade + " anos");
        alert("Você tem " + idade + " anos");
        break;
    case 3:
        message = "Informe seu e-mail";
        email = prompt("Digite seu e-mail");
        console.log("Seu e-mail é " + email);
        alert(`Seu e-mail é ${email}`);

        const dados = {
            nome: nome || "Não informado",
            idade: idade || "Não informado",
            email: email || "Não informado",
        };
        console.log(dados);

        break;
    default:
        alert("Favor escolher um número de 1 a 3.");

}