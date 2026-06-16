const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Digite Sua Idade: " , function(valor){
    let numero = Number(valor);
    if (numero >= 0 && numero <= 12) {
        console.log("Menor de idade");
    } else if (numero >= 13 && numero <= 17){
        console.log("Adolecente");
    } else if (numero >= 18 && numero <= 59){
        console.log("Aduto");
    } else if (numero >= 60 && numero <= 120){
        console.log("Idoso");
    } else if (numero < 0 || numero > 120){
        console.log("Invalido");
    } else {
        console.log("fim");
    }

    rl.close();
});

