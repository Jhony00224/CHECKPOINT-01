let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;
let padrao = null;
let teste = null;
let numero = null;

//microondas
teste = 'teste';
numero = 16;

function selecionar (opcao) {
    switch (opcao) {
        case pipoca:
            padrao = pipoca
            break;
        case macarrao:
            padrao = macarrao;
            break;
        case carne:
            padrao = carne
            break;
        case feijao:
            padrao = feijao
            break;
        case brigadeiro:
            padrao = brigadeiro
            break;
        default:
            padrao = false;
    }
}


function ligar(alteracao) {
    alteracao === 0 ? alteracao = padrao: '';

    if (padrao == false) {
        console.log("Prato inexistente.");
        return ''
    }else if (alteracao >= (padrao*2) && alteracao < (padrao*3)) {
        console.log("sua comida queimou!");
    } else if (alteracao < padrao) {
        console.log("tempo insuficiente!");
    } else if (alteracao >= (padrao*3)) {
        console.log("kabunn");
    } else {
        console.log("Prato pronto, bom apetite!");
    }
    return ''
}

selecionar(teste)
let resultado = ligar(numero);
console.log(resultado);