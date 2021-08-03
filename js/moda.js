const lista = [2,2,3,5,5,5,1,1,2,3,5,4,1,2,3,5,4,1,2,3,5,4,1,2,3,5,4];


function calcularModa(_lista){
    const lista1Count = {};

    _lista.forEach(
        function (elemento) {
            if (Boolean(lista1Count[elemento])){
                lista1Count[elemento] += 1; 
            } else {
                lista1Count[elemento] = 1; 
            }
        }
    );
    const lista1CountAsList = Object.entries(lista1Count).sort(
        function(elementoA, elementoB){
            return elementoB[1] - elementoA[1]; 
        }
    );
    return lista1CountAsList[0];
}

console.log('moda: ', calcularModa(lista));