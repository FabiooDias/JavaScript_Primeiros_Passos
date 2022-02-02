console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = false
const maiorIdade = 18;
let temPassagemComprada = false

console.log(`Lista de Destinos:`);
console.log(listaDeDestinos)

// if (idadeComprador >= maiorIdade) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); // removendo um item
// } else if (estaAcompanhada) {
//     console.log("Comprador esta acompanhado");
//     listaDeDestinos.splice(1, 1); //removendo o item
// } else {
//     console.log("Não é maior de idade e não posso vender")
// }

if (idadeComprador >= maiorIdade || estaAcompanhada) {
    console.log("Conseguiu comprar a passagem pra viajar\n");
    temPassagemComprada = true
    listaDeDestinos.splice(2, 1); // removendo um item
} else {
    console.log("Não é maior de idade e não posso vender\n")
}

console.log("Embarque: \n")
if(idadeComprador >= maiorIdade && temPassagemComprada || idadeComprador < maiorIdade && estaAcompanhada){
    console.log("Boa Viagem");
} else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

