console.log("Probando Calculos");

// Función para calcular la edad del usuario
function calcularEdad() {
    const day = obtenerNumeroDesdePrompt("Ingresa el día de tu nacimiento (1-31):");
    const month = obtenerNumeroDesdePrompt("Ingresa el mes de tu nacimiento (1-12):");
    const year = obtenerNumeroDesdePrompt("Ingresa el año de tu nacimiento:");

    const today = new Date();
    let age = today.getFullYear() - year;

    if (esCumpleaniosPasadoEsteanio(today, day, month)) {
        age--;
    }

    console.log(`Tu edad es: ${age} años.`);
}

function obtenerNumeroDesdePrompt(mensaje) {
    return parseInt(prompt(mensaje), 10);
}

function esCumpleaniosPasadoEsteanio(fechaActual, diaNacimiento, mesNacimiento) {
    const mesActual = fechaActual.getMonth() + 1;
    const diaActual = fechaActual.getDate();
    return mesActual > mesNacimiento || (mesActual === mesNacimiento && diaActual >= diaNacimiento);
}

calcularEdad();
console.log("--------------------");

// Función para calcular la tasa de interés
function calcularTasaInteres(abono, precioVenta) {
    const porcentajeAbono = (abono / precioVenta) * 100;

    if (porcentajeAbono >= 10 && porcentajeAbono < 15) {
        return 7.00; // 7%
    } else if (porcentajeAbono >= 15 && porcentajeAbono < 20) {
        return 6.75; // 6.75%
    } else if (porcentajeAbono >= 20) {
        return 6.50; // 6.50%
    } else {
        return 0; // Porcentaje fuera de los rangos especificados
    }
}

function solicitarValorNumerico(mensaje) {
    return parseFloat(prompt(mensaje));
}

const precioVenta = solicitarValorNumerico("Ingresa el precio de venta: $");
const abono = solicitarValorNumerico("Ingresa el abono que dará el cliente: $");
const saldoRestante = calcularSaldoRestante(precioVenta, abono);

console.log(`El abono dado representa el ${calcularPorcentajeAbono(abono, precioVenta).toFixed(2)}% del precio de venta.`);
console.log("--------------------");
console.log(`CPP: $${saldoRestante.toFixed(2)}`);
console.log(`La tasa aplicable es: ${calcularTasaInteres(abono, precioVenta).toFixed(2)}%`);
console.log("--------------------");

function calcularSaldoRestante(precioVenta, abono) {
    return precioVenta - abono;
}

function calcularPorcentajeAbono(abono, precioVenta) {
    return (abono / precioVenta) * 100;
}

// Función para mostrar los detalles de los gastos de cierre
function mostrarDetallesGastosCierre(cpp) {
    console.log("DETALLE DE LA LETRA");
    console.log("--------------------");
    console.log("DETALLES GASTOS DE CIERRE");

    const gastosLegales = {
        fiduciaria: 165.85,
        otrosGastos: 5
    };

    const gastosTramite = {
        tarjetaTraspaso: 0
    };

    const otrosGastos = {
        porcentajeComisionDesembolso: 2 / 100,
        porcentajeITBMS: 7 / 100,
        bono: 500
    };

    mostrarGastosLegales(gastosLegales);
    mostrarGastosTramite(gastosTramite);
    mostrarOtrosGastos(cpp, otrosGastos);

    const totalGastosCierre = calcularTotalGastosCierre(gastosLegales, gastosTramite, cpp, otrosGastos);
    console.log(`TOTAL: $${totalGastosCierre.toFixed(2)}`);
}

function mostrarGastosLegales({ fiduciaria, otrosGastos }) {
    console.log("GASTOS LEGALES");
    console.log(`Fiduciaria: $${fiduciaria}`);
    console.log(`Otros Gastos Legales: $${otrosGastos}`);
}

function mostrarGastosTramite({ tarjetaTraspaso }) {
    console.log("GASTOS TRAMITE");
    console.log(`Tarjeta de Traspaso: $${tarjetaTraspaso}`);
}

function mostrarOtrosGastos(cpp, { porcentajeComisionDesembolso, porcentajeITBMS, bono }) {
    console.log("OTROS");

    const comisionDesembolso = (cpp * porcentajeComisionDesembolso) + bono;
    const ITBMS = (cpp * porcentajeComisionDesembolso) * porcentajeITBMS;

    console.log(`Comision por Desembolso: $${comisionDesembolso.toFixed(2)}`);
    console.log(`ITBMS: $${ITBMS.toFixed(2)}`);
}

function calcularTotalGastosCierre(gastosLegales, gastosTramite, cpp, otrosGastos) {
    const { fiduciaria, otrosGastos: otrosGastosLegales } = gastosLegales;
    const { tarjetaTraspaso } = gastosTramite;
    const { porcentajeComisionDesembolso, porcentajeITBMS, bono } = otrosGastos;

    const comisionDesembolso = (cpp * porcentajeComisionDesembolso) + bono;
    const ITBMS = (cpp * porcentajeComisionDesembolso) * porcentajeITBMS;

    return fiduciaria + otrosGastosLegales + tarjetaTraspaso + comisionDesembolso + ITBMS;
}

mostrarDetallesGastosCierre(saldoRestante);
