// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    console.log (10 >= 9); // impirmir resultado
}
compareTenAndNine(); // aqui llamamos a la función 

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    console.log (0 == 0); // imprimir resultado
}
compareZeroAndZero();

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    console.log (7 > 8 && 7 < 10);// comparando
}
compareSeven(); // llamando a la función

// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
    const precioProducto = 1500; // Precio del producto
const descuento = 25; // Descuento 
const dineroDisponible = 1150; // Dinero que tienes

const precioConDescuento = precioProducto - (precioProducto * (descuento / 100));


if (dineroDisponible >= precioConDescuento) {
    console.log("Puedes comprar el producto.");// resultado 1
} else {
    console.log("No puedes comprar el producto."); // o resultado 2
}

}

// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    let mensaje = "Hola JavaScript"; // creamos una variable llamada mensaje
    console.log (mensaje); // imprimimos resultado
}
 createMessageVariable();

// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    let resultado = 2 + 3; // creamos una variable 
    console.log (resultado); // imprimimos resultado
}
createSumVariable(); // llamamos a la función

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    const IS_DISABLED = true // constante IS_DISABLED
    console.log (IS_DISABLED); // imprimimos 
}
 
createDisabledConstant();

// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    let capacidad = null // creamos la variable capacidad 
    console.log (capacidad); // imprimimos 
}
createNullVariable(); // ñllamando a la función

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    let dinero = undefined // creamos la variable dinero
    console.log (dinero); // imprimimos resultado
}
createUndefinedVariable();

// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
     
function checkUserNameType() {
    let userName = "Ruth"; // Declarar la variable userName
    let tipoDeDato = typeof userName; // Obtener el tipo de dato

    // Imprimir el tipo de dato en la consola
    console.log(`El tipo de dato de userName es: ${tipoDeDato}`); 
}

checkUserNameType(); // Llamar a la función


// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    let  dogId = "12345"; // cadena de texto 1 al 5
    let tipoDeDato = typeof dogId;
    console.log (`El tipo de dato de dogId es: ${tipoDeDato}`); // verificamos el resultado
}
checkDogIdIsString(); // llamamos a la función

// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    let mensaje = "Hola, soy Ruth y estoy practicando JavaScript :) "; // variable mensaje 
    console.log (mensaje); // imprimir 
}
logMessage(); // llamar a la función

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
   let edad = 30; // creamos la variable edad 
   console.log (edad); // imprimimos 
}
logAge();

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
    let version = 2024; // creamos la variable version
    console.log('La versión de JavaScript es: ' + version); // imprimimos el resultado
    
}

logVersion();

// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};