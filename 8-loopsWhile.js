console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `BeloHorizonte`,
    `Goiania`
);

const idadeComprador = 15;
const estaAcompanhada = true;
const maiorIdade = 18;
let temPassagemComprada = false;
const destino = "Salvador"

console.log(`\nLista de Destinos:`);
console.log(listaDeDestinos)

let encontrouDestino = false;
let podeComprar = false;

let contador = 0;
// while (contador < listaDeDestinos.length) {
//     if (listaDeDestinos[contador] == destino) {
//         encontrouDestino = true
//         podeComprar = idadeComprador >= maiorIdade || estaAcompanhada && encontrouDestino;
//         console.log("Destino Existente")
//         break;
//     } else {
//         console.log("Destino não existe")
//     }
//     contador += 1;
// }
// COMO FAZER ESTE MESMO LOOP COM O FOR
for(let cont = 0; cont < listaDeDestinos.length; cont++){
    if (listaDeDestinos[contador] == destino) {
        encontrouDestino = true
        podeComprar = idadeComprador >= maiorIdade || estaAcompanhada && encontrouDestino;
        console.log("Destino Existente")
        break;
    } else {
        console.log("Destino não existe")
    }
}


if (podeComprar) {
    console.log("Conseguiu comprar a passagem pra viajar\n");
    temPassagemComprada = true
    listaDeDestinos.splice(2, 1); // removendo um item
} else {
    console.log("Não é maior de idade e não posso vender\n")
}

console.log("Embarque: \n")
if (idadeComprador >= maiorIdade && temPassagemComprada || idadeComprador < maiorIdade && estaAcompanhada) {
    console.log(`Boa Viagem para ${destino}`);

} else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

