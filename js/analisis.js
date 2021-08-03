const salariosCol = colombia.map(function(persona){
    return persona.salario;
});
const salariosColSorted = salariosCol.sort(function(salarioA, salarioB){
    return salarioB - salarioA;
});

function promedio(_lista) {
    let sumaLista = _lista.reduce(function(valorAcumulado=0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });    
    mediaAritmetica = sumaLista / _lista.length;
    return mediaAritmetica;
}

function medianaSalariosCol(lista){
    const mitad = parseInt(lista.length / 2);
    if (mitad % 2 === 0) {
        const personaMitad = lista[mitad-1];
        const personaMitadDos = lista[mitad];
        const mediana = promedio([personaMitad, personaMitadDos])
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

function calcularMedianaTop10Col(lista) {
    const inicioTop10 = 0;
    const finTop10 = parseInt(lista.length*(10/100));
    const salarioTop10 = lista.splice(inicioTop10, finTop10);
    return salarioTop10;
}

const medianaGeneralCol = medianaSalariosCol(salariosColSorted);
const medianaTop10Col = calcularMedianaTop10Col(salariosColSorted);
console.log({medianaGeneralCol, medianaTop10Col});