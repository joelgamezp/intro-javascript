//Ejercicio 1
function multiply(x, y) {
    if (y !== undefined) {
       return x * y;
      } else {
        return function(y) {
            return x * y;
        };
    }
}
console.log(multiply(2,2));

//Ejercicio 2
var fibonacci = function (numero) {
    if (numero <= 1)
    return numero;
    return fibonacci(numero-1) + fibonacci(numero -2)
}
console.log(fibonacci(10));