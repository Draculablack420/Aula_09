const readline = require("readline");

const rl = readline.createInterface({
    input = process.stdin,
    output = process.stdout
});
rl.question ("Digite o Valor da Sua Compra: ", function(valor) {
    let numero = Number(valor);
if (numero % 2 == 0){
    console.log("Numero Digitado é Par");
} else {
    console.Log("Numero Digitado é Impar")
}
rl.close();    
});