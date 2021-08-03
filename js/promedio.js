const lista = [
    100,
    200,
    600,
    500,
    700,
];

function calcularMediaAritmetica(_lista) {
    let sumaLista = _lista.reduce(function(valorAcumulado=0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });    
    mediaAritmetica = sumaLista / _lista.length;
    return mediaAritmetica;
}

function calcularMediana(_lista) {
    let sumaLista = _lista.reduce(function(valorAcumulado=0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });    
    mediaAritmetica = sumaLista / _lista.length;
    return mediaAritmetica;
}

console.log(calcularMediaAritmetica(lista));
console.log(calcularMediana(lista));