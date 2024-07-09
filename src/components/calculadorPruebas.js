console.log("Probando Calculos");

function calcularEdad() {
    const day = parseInt(prompt("Ingresa el día de tu nacimiento (1-31):"), 10);
    const month = parseInt(prompt("Ingresa el mes de tu nacimiento (1-12):"), 10);
    const year = parseInt(prompt("Ingresa el año de tu nacimiento:"), 10);

    const today = new Date();
    let age = today.getFullYear() - year;

    if (today.getMonth() + 1 < month || (today.getMonth() + 1 === month && today.getDate() < day)) {
        age--;
    }

    console.log(`Tu edad es: ${age} años.`);
    return age; // Devuelve la edad calculada
}

// Llamada a la función calcularEdad para obtener la edad
const edad = calcularEdad();
console.log("--------------------");

// Función para calcular el seguro de vida usando la edad calculada
function calculoSeguroVida(age) {
    if (age >= 18 && age < 30) {
        return 0.19;
    } else if (age >= 31 && age < 55) {
        return 0.23;
    } else if (age >= 56 && age < 65) {
        return 0.28;
    } else if (age >= 66 && age < 79) {
        return 0.35;
    } else {
        return null; // Devuelve null si la edad no está en ningún rango especificado
    }
}

// Calcular el seguro de vida usando la edad obtenida de calcularEdad
const resultadoSeguro = calculoSeguroVida(edad);

// Mostrar el resultado del seguro de vida
console.log(`El resultado de Seguro de vida para la edad ${edad} es: ${resultadoSeguro}`);
console.log("--------------------");

// Función para calcular la tasa de interés
function calcularTasa(abono, precioVenta) {
    // Convertir abono y precioVenta a números flotantes
    abono = parseFloat(abono);
    precioVenta = parseFloat(precioVenta);

    // Calcular porcentaje del abono respecto al precio de venta
    var porcentajeAbono = (abono / precioVenta) * 100;

    // Determinar la tasa basada en el porcentaje del abono
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

// Solicitar precio de venta
var precioVenta = prompt("Ingresa el precio de venta: $");

// Convertir a número flotante
precioVenta = parseFloat(precioVenta);

// Solicitar abono dado
var abono = prompt("Ingresa el abono que dará el cliente: $");

// Convertir a número flotante
abono = parseFloat(abono);

// Calcular CPP (Costo de Propiedad del Cliente)
var cpp = precioVenta - abono;

// Mostrar porcentaje del abono
var porcentajeAbono = (abono / precioVenta) * 100;
console.log("El abono dado representa el " + porcentajeAbono.toFixed(2) + "% del precio de venta.");
console.log("--------------------");

// Mostrar CPP
console.log("CPP: $" + cpp.toFixed(2));
console.log("--------------------");

// Función para detalles de gastos de cierre
function detallesGastosCierre() {
    console.log("DETALLES GASTOS DE CIERRE");
    console.log("GASTOS LEGALES");
    const fiduciaria = 165.85;
    console.log("Fiduciaria: $" + fiduciaria);
    const otrosGastosLegales = 5;
    console.log("Otros Gastos Legales: $" + otrosGastosLegales);
    console.log("GASTOS TRAMITE");
    const tarTraspaso = 0;
    console.log("Tarjeta de Traspaso: $" + tarTraspaso);
    console.log("OTROS");

    // Porcentajes a usar
    var prcComisionDesembolso = 2 / 100;
    var prcSiete = 7 / 100;
    const bono = 500;

    // Calcular la comisión por desembolso y el ITBMS
    var comisionDesembolso = (cpp * prcComisionDesembolso) + bono;
    var ITBMS = (cpp * prcComisionDesembolso) * prcSiete;
    //const timbres = Math.ceil(montoPrestamo() * 0.1);
    const timbres = 14.30
    console.log("Comision por Desembolso: $" + comisionDesembolso.toFixed(2));
    console.log("ITBMS: $" + ITBMS.toFixed(2));

    // Calcular el total de gastos de cierre
    var totalGastosCierre = fiduciaria + otrosGastosLegales + tarTraspaso + timbres + comisionDesembolso + ITBMS;
    console.log("TOTAL GASTOS DE CIERRE: $" + totalGastosCierre.toFixed(2));

    return totalGastosCierre;
}

// Llamar a la función para mostrar los detalles de gastos de cierre
//detallesGastosCierre();
//console.log("--------------------");

// Función para calcular el monto del préstamo
function montoPrestamo() {
    // Obtener el total de gastos de cierre desde la función detallesGastosCierre
    var detalleGastosCierre = detallesGastosCierre();

    // Sumar el CPP con el detalle de gastos de cierre
    var montoPrestamo = cpp + detalleGastosCierre;

    return montoPrestamo;
}

// Llamar a la función para calcular el monto del préstamo
var monto = montoPrestamo();
console.log("El monto del préstamo es: $" + monto.toFixed(2));
console.log("--------------------");
