//Ejercicio 1
let nombre = prompt(`¿Cual es tu nombre?`);
let edad= Number(prompt(`¿Cual es tu edad?`));

if (edad >= 18 && (nombre === 'mario' || nombre === 'carlos')) {
    console.log(`Puedes ingresar al area VIP ${nombre}`);
} else if (edad >= 18) {
    console.log(`Puedes ingresar a la discoteca`);
} else {
    console.log(`No puedes ingresar a la discoteca`);
}

//Ejercicio 2
let mano1 = prompt(`Ingresa primera mano:`);
let mano2 = prompt(`Ingresa segunda mano:`);

switch(mano1) {
    case 'piedra':
    if(mano2 == 'papel') {
        console.log(`Gana ${mano2} a ${mano1}`);
        break;
    } else if(mano2 == 'tijeras') {
        console.log(`Gana ${mano1} a ${mano2}`);
        break;
    } else if (mano1 == mano2) {
        console.log(`Empate ${mano1} - ${mano2}`);
        break
    }

    case 'papel':
    if(mano2 == 'tijeras') {
        console.log(`Gana ${mano2} a ${mano1}`);
        break;
    } else if(mano2 == 'piedra') {
        console.log(`Gana ${mano1} a ${mano2}`);
        break;
    } else if (mano1 == mano2) {
        console.log(`Empate ${mano1} - ${mano2}`);
        break
    }

    case 'tijeras':
    if(mano2 == 'papel') {
        console.log(`Gana ${mano1} a ${mano2}`);
        break;
    } else if(mano2 == 'piedra') {
        console.log(`Gana ${mano2} a ${mano1}`);
        break;
    } else if (mano1 == mano2) {
        console.log(`Empate ${mano1} - ${mano2}`);
        break
    }

    default: 
    console.log(`Datos invalidos.`);
}

//Ejercicio 3
let numero = Number(prompt(`Ingrese un numero para saber si es divisible entre 2:`));
alert((numero % 2) == 0 ? `El numero ${numero} es divisible entre 2` : `El numero ${numero} no es divisible entre 2`);

//Ejercicio 4
let numero = Number(prompt(`Ingrese un numero para saber si es par:`));
alert((numero % 2) == 0 ? `El numero ${numero} es par.` : `El numero ${numero} es impar.`);

//Ejercicio 5
Number(prompt(`Ingrese un numero:`)) == 1000 ? alert(`¡Ganaste un premio!.`) : alert(`Lo sentimos, sigue participando.`);

//Ejercicio 6
let numero1 = prompt(`Ingrese el primero numero:`);
let numero2 = prompt(`Ingrese el segundo numero:`);
alert( (numero1 < numero2) ? `el numero ${numero1} es menor que el numero ${numero2}.`: `el numero ${numero2} es menor que el numero ${numero1}.`);

//Ejercicio 7
let numero1 = Number(prompt(`Ingrese el primero numero:`));
let numero2 = Number(prompt(`Ingrese el segundo numero:`));
let numero3 = Number(prompt(`Ingrese el tercer numero:`));

if(numero1 == numero2) {
    alert(`El numero ${numero1} es igual al ${numero2}.`);
} else if(numero2 == numero3) {
    alert(`El numero ${numero2} es igual al ${numero3}.`);
} else if(numero3 == numero1) {
    alert(`El numero ${numero1} es igual al ${numero3}.`);
} else if(numero1 > numero2 && numero1 > numero3) {
    alert(`El numero ${numero1} es el mayor.`);
} else if(numero2 > numero1 && numero2 > numero3) {
    alert(`El numero ${numero2} es el mayor.`);
} else if(numero3 > numero2 && numero3 > numero1) {
    alert(`El numero ${numero3} es el mayor.`);
}