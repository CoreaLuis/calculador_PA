console.log("Probando Calculos")
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

//calculo de tazas de interes
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
//Calculo de CPP
// Solicitar precio de venta
var precioVenta = prompt("Ingresa el precio de venta: $");

// Convertir a número flotante
precioVenta = parseFloat(precioVenta);

// Solicitar abono dado
var abono = prompt("Ingresa el abono que dará el cliente: $");

// Convertir a número flotante
abono = parseFloat(abono);

// Calcular saldo restante
var cpp = precioVenta - abono;

// Calcular el porcentaje del abono respecto al precio de venta
var porcentajeAbono = (abono / precioVenta) * 100;

// Mostrar el porcentaje del abono
console.log("El abono dado representa el " + porcentajeAbono.toFixed(2) + "% del precio de venta.");
console.log("--------------------");

// Mostrar el saldo restante
console.log("CPP: " + "$" + cpp.toFixed(2));
//integrando la funcion
var tasa = calcularTasa(abono, precioVenta);

console.log("La tasa aplicable es: " + tasa.toFixed(2) + "%");
console.log("--------------------");


//Detalles de la letra
console.log("DETALLE DE LA LETRA")
console.log("--------------------");

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
    console.log("Comision por Desembolso: $" + comisionDesembolso.toFixed(2));
    console.log("ITBMS: $" + ITBMS.toFixed(2));

    // Calcular el total de gastos de cierre
    var total = fiduciaria + otrosGastosLegales + tarTraspaso + comisionDesembolso + ITBMS;
    console.log("TOTAL: $" + total.toFixed(2));
}

// Llamar a la función para ejecutar el código
detallesGastosCierre();
