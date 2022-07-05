//Ejercicio 1
let numero = prompt("Ingrese un numero: ");

if ( !isNaN(numero) ) {
console.log(`El doble del numero es: ${numero * 2}`);
} else {
console.log(`El valor ingresado no es un numero.`)
}

//Ejercicio 2
let primerNumero = prompt("Ingrese el primero numero: ");
let segundoNumero = prompt("Ingrese el segundo numero: ");

if ( !isNaN(primerNumero) && !isNaN(segundoNumero) ) {
console.log(`La resta de los numeros es: ${primerNumero - segundoNumero}`);
alert(`La resta de los numeros ingresados es: ${primerNumero - segundoNumero}`);
} else {
console.log(`Un numero ingresado no es correcto.`)
alert(`Un numero ingresado no es correcto.`);
}

//Ejercicio 3
let radio = 5.3;
alert(`El área de un circulo con radio ${radio} es ${Math.PI * (radio * radio)}`);

//Ejercicio 4
let D = 8;
let d = 6;
alert(`El área de un rombo con medidas D: ${D}cm y d: ${d}cm es: ${ (D*d)/2 }cm`);
console.log(`El área de un rombo con medidas D: ${D}cm y d: ${d}cm es: ${ (D*d)/2 }cm`);