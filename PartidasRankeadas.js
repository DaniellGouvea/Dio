


function saldo(vitorias, derrotas){

    let tier;
    let saldo = vitorias - derrotas;

    if(saldo < 10){
        tier = "Ferro"
    }else if(saldo >= 11 && saldo <= 20){
        tier = "Bronze"
    }else if(saldo >= 21 && saldo <= 50){
        tier = "Prata"
    }else if(saldo >= 51 && saldo <= 80){
        tier = "Ouro"
    }else if(saldo >= 81 && saldo <= 90){
        tier = "Diamante"
    }else if(saldo >= 91 && saldo <= 100){
        tier = "Lendário"
    }else{
        tier = "Imortal"
    }

    return `O Heróitem saldo de ${saldo}, está no nível ${tier}`
}

console.log(saldo(110, 10))