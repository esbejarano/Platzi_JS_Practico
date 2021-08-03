function cupon(nombre, porcentaje) {
    this.nombre = nombre;
    this.porcentaje = porcentaje;    
}

const cupones = [
    new cupon("JuanDC_es_Batman", 20),
    new cupon("pero_no_le_digas_a_nadie", 30),
    new cupon("es_un_secreto", 10),
];

function calcularPorcentajeRestante(porcentaje) {
    const porcentajeRestante = 100 - porcentaje;
    return porcentajeRestante / 100;
}

function definirPrecioDescuento(precio, descuento) {
    const porcentajeRestante = calcularPorcentajeRestante(descuento);
    const precioConDescuento = precio * porcentajeRestante;
    return precioConDescuento;
}

function calcularDescuento() {
    const precioOriginal = document.getElementById("precio").value;
    const cuponInput = document.getElementById("cupon").value;
    const _cupon = cupones.find(function(cupon) {
        return String(cupon.nombre).toUpperCase() === String(cuponInput).toUpperCase();
    });
    if (Boolean(_cupon)) {
        const descuento = _cupon.porcentaje;
        console.log('descuento: ', descuento);
        const precioConDescuento = definirPrecioDescuento(Number(precioOriginal), Number(descuento));
        document.getElementById("precioConDescuento").innerText = `El precio con descuento es: $${precioConDescuento}`;
    } else {
        document.getElementById("precioConDescuento").innerText = `El cupon no existe, asi que el precio es: $${precioOriginal}`;
    }
    
}