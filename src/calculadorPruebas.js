console.log("Probando")
// Solicitar día de nacimiento
var day = prompt("Ingresa el día de tu nacimiento (1-31):");
// Convertir a número entero
day = parseInt(day, 10);

// Solicitar mes de nacimiento
var month = prompt("Ingresa el mes de tu nacimiento (1-12):");
// Convertir a número entero
month = parseInt(month, 10);

// Solicitar año de nacimiento
var year = prompt("Ingresa el año de tu nacimiento:");
// Convertir a número entero
year = parseInt(year, 10);

// Obtener la fecha actual
var currentDate = new Date();

// Obtener el año actual
var currentYear = currentDate.getFullYear();

// Obtener el mes actual
var currentMonth = currentDate.getMonth() + 1; // +1 porque getMonth() devuelve un valor de 0 a 11

// Obtener el día actual
var currentDay = currentDate.getDate();

// Calcular la edad
var age = currentYear - year;

// Ajustar la edad si aún no ha pasado el cumpleaños este año
if (currentMonth < month || (currentMonth === month && currentDay < day)) {
    age--;
}

// Mostrar la edad
console.log("Tu edad es: " + age + " años.");