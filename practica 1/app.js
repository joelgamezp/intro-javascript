let pantalla = document.getElementById("resultado");
let botonesNumeros = document.querySelectorAll(".button");
let operadores = document.querySelectorAll(".operador");
let calcularOperacion = document.getElementById("calcularOperacion");

let operadoresArray = ["-", "*", "/", "+"];

botonesNumeros.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        e.preventDefault();
        pantalla.value += boton.value;
    })
});

operadores.forEach((operador) => {
    operador.addEventListener("click", (e) => {
        e.preventDefault();
        pantalla.value += operador.value;
    })
});

calcularOperacion.addEventListener("click", (e) => {
    e.preventDefault();

    if(pantalla.value <= 0) { return; }
    
    this.calculo(pantalla.value);

});


function calculo (valor) {

    let numero1;
    let numero2;
    let operadorCalculo;
    let indexOperador;

    let i = 0;

    while(i < valor.length) {
        for(operador of operadoresArray) {
            if (valor.charAt(i) == operador) {
                operadorCalculo = operador;
                indexOperador = i;
                break;
            }
        }
        i++;
    }

    numero1 = Number(valor.substring(0,indexOperador));
    numero2 = Number(valor.substring(indexOperador+1));

    console.log(numero1)
    console.log(numero2)
    console.log(operadorCalculo)

    switch(operadorCalculo) {
        case "+": pantalla.value = numero1 + numero2; break;
        case "-": pantalla.value = numero1 - numero2; break;
        case "/": pantalla.value = numero1 / numero2; break;
        case "*": pantalla.value = numero1 * numero2; break;
    }
    console.log(pantalla.value);
} 
