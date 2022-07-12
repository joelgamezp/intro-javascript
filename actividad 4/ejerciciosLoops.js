//Ejercicio 2
let numero = Number(prompt(`Ingrese un numero:`));
let index = numero;

while(index > 1) {
    index --;
    
    if (numero % 5 == 0) {
        console.log(`*** Numero multiplo de 5: ${numero} ***`);
    }
    
    numero --;
    console.log(`Decremento numero: ${numero} - Decremento index: ${index}`);
}

//Ejercicio 3
let numero = Number(prompt(`Ingrese un numero:`));
let index = numero;
do {
    index --;
    
    if (numero % 5 == 0) {
        console.log(`*** Numero multiplo de 5: ${numero} ***`);
    }
    
    numero --;
    console.log(`Decremento numero: ${numero} - Decremento index: ${index}`);
} while(index > 1);

//Ejercicio 4
let numeroInicial = 50;

for(let i = 0; i <= numeroInicial; i++){
    if(i % 2 != 0) {
        console.log(`Numero impar encontrado: ${i}`)
    }
}

//Ejercicio 5

let rangoInicial = Number(prompt(`Ingrese el rango inicial:`));
let rangoFinal = Number(prompt(`Ingrese el rango final:`));

let rangoValido = rangoFinal - rangoInicial;
let listaInicial = 101;

if( rangoValido == 10 ){

	for (let index = 1; index < listaInicial; index++) {
  	
    if( index >= rangoInicial && index <= rangoFinal ){
    console.log(` -- NUMERO EXCLUIDO ${index} --`);
    continue;
    }
    
    console.log(`Numero en lista ${index}`);
  }
} else {
console.log(`Rango invalido, debe ser de 10 numeros.`)
}

//EJERCICIO *BONUS*
//Bonus: Generar dos números aleatorios: uno de un dígito, otro de máximo 3 dígitos, preguntar al usuario el resultado 
//de la multiplicación de los dos números. Si contesta correctamente
//saldrá el mensaje de ganaste, si no le realizará de nuevo la pregunta pero con dos números diferentes.
let salir = false;
do {
    
    let numero1= Math.ceil(Math.random()*9);
    let numero2= Math.ceil(Math.random()*999);
    let respuesta = Number(prompt(`Ingrese la respuesta de la multiplicacion ${numero1} * ${numero2}`));
    
    let multiplicacion = numero1*numero2;
    
    if (respuesta == multiplicacion) {
        alert(`¡Respuesta correcta! ${numero1} * ${numero2} = ${multiplicacion}`);
        console.log(`¡Respuesta correcta! ${numero1} * ${numero2} = ${multiplicacion}`);
        salir = true;
    }

} while (!salir);