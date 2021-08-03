const lista = [
    200,
    700,
    550,
    400,
    700,
    800
];

function promedio(_lista) {
    let sumaLista = _lista.reduce(function(valorAcumulado=0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });    
    mediaAritmetica = sumaLista / _lista.length;
    return mediaAritmetica;
}

function calcularMediana(_lista) {
    _lista = _lista.sort(function (a, b){
        if (a < b) {
            return -1;
        } else if (a > b){
            return 1;
        } else {
            return 0;
        }
    });
    let mediana = 0;
    const mitadLista = parseInt(_lista.length / 2);
    if (_lista.length % 2 === 0) {
        const elemento1 = _lista[mitadLista - 1];
        const elemento2 = _lista[mitadLista];
        mediana = promedio([elemento1, elemento2]);
    } else {
        mediana = _lista[mitadLista];
    }
    return mediana;
}

console.log(calcularMediana(lista));