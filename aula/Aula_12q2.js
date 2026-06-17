const readline = require ("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question ("Digite o Valor da Sua Compra: ", function(valor){
    let numero = Number(valor);
    let desconto = 0;
    let valorfinal = 0;



if (numero >= 0 && numero <= 50){
    console.log("Valor Sem Desconto");

} else if (numero >= 51 && numero <= 100)
});