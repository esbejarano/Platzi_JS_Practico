const ladoCuadrado = 5;

const ladoTrianguloUno = 6;
const ladoTrianguloDos = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const radioCirculo = 4;
const PI = Math.PI;

function perimetroCuadrado(ladoEnCM){
    const perimetro = ladoEnCM * 4;
    return perimetro;
}

function areaCuadrado(ladoEnCM, baseEnCM){
    const area = ladoEnCM * baseEnCM;
    return area
}

function perimetroTriangulo(ladoUno, ladoDos, base) {
    const perimetro = ladoUno + ladoDos + base;
    return perimetro;
}

function areaTriangulo(altura, base) {
    const area = (altura * base)/2;
    return area;
}

function diametroCirculo(radio) {
    const diametroCirculo = radio * 2;
    return diametroCirculo;
}

function perimetroCirculo (radio) {
    const perimetroCirculo = diametroCirculo(radio) * PI;    
    return perimetroCirculo;
}

function areaCirculo (radio, piValue) {
    const areaCirculo = (radio * radio) * piValue;
    return areaCirculo;
}

function mostrarResultado(propiedad, valor, id) {
    document.getElementById(id).innerText = `${propiedad} ${valor}`;
}

function calcularPerimetroCuadrado(){
    const value = document.getElementById("ladoCuadrado").value;
    const perimetro = perimetroCuadrado(Number(value));
    mostrarResultado("El perimetro es: ", perimetro, "resultadoCuadrado");
}

function calcularAreaCuadrado(){
    const value = document.getElementById("ladoCuadrado").value;
    const area = areaCuadrado(Number(value), Number(value));
    mostrarResultado("El area es: ", area, "resultadoCuadrado");
}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("ladoUno").value;
    const lado2 = document.getElementById("ladoDos").value;
    const base = document.getElementById("baseTriangulo").value;
    const perimetro = perimetroTriangulo(Number(lado1), Number(lado2), Number(base));
    mostrarResultado("El perimetro es: ", perimetro, "resultadoTriangulo");
}

function calcularAreaTriangulo(){
    const altura = document.getElementById("alturaTriangulo").value;
    const base = document.getElementById("baseTriangulo").value;
    const area = areaTriangulo(Number(altura), Number(base));
    mostrarResultado("El area es: ", area, "resultadoTriangulo");
}

function calcularPerimetroCirculo(){
    const value = document.getElementById("radioCirculo").value;
    const perimetro = perimetroCirculo(Number(value));
    mostrarResultado("El perimetro es: ", perimetro, "resultadoCirculo");
}

function calcularAreaCirculo(){
    const value = document.getElementById("radioCirculo").value;
    const area = areaCirculo(Number(value), PI);
    mostrarResultado("El area es: ", area, "resultadoCirculo");
}

function calcularAlturaTrianguloIsoceles() {
    const ladoUno = document.getElementById("ladoUnoIsoceles").value;
    const ladoDos = document.getElementById("ladoDosIsoceles").value;
    const ladoBase = document.getElementById("ladoBaseIsoceles").value;
    
    if (Boolean(ladoUno) && Boolean(ladoDos) && Boolean(ladoBase)) {
        if (ladoUno === ladoDos) {
            const trianguloPequenoLadoB = ladoBase / 2;
            const trianguloPequenoLadoBase = ladoUno;

            const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
            const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

            const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);
            const trianguloGrandeAltura = trianguloPequenoLadoA;
            mostrarResultado("La altura es: ", trianguloGrandeAltura, "resultadoTrianguloIsoceles");
        } else {
            mostrarResultado("Los lados uno y dos deben ser iguales", "", "resultadoTrianguloIsoceles");
        }
    } else {
        mostrarResultado("Campos Obligatorios", "", "resultadoTrianguloIsoceles");
    }
}

