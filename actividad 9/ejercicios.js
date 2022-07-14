//Problema 1:
//Cuadre el valor de cada elemento en el array. Suponga que solo obtendrá números en la array de entrada.
`const input = [ 1, 2, 3, 4, 5 ];`

//Resultado esperado:
`[ 1, 4, 9, 16, 25]`

//Solucion
console.log(input.map((n) => n * n));

//Problema 2:
//Calcule los valores de la media y la mediana de los elementos numéricos del siguiente arreglo.

`const input = [12, 46, 32, 64];`

//Resultado esperado:
  `{ mean: 38.5, median: 32 }`

//Solución

let media = (input.reduce((a,b) => a + b) / input.length);

let mediana = function() {
  
  let i = 0;
  
  while(i < 2) {
    
    input.pop();
    input.shift()
    
    i = input.length;
  }
  
  return input.reduce((a,b) => a + b) / input.length;
} 

let result = { mean: media, median: mediana() }

console.log(result);


//Problema 3
//Si la entrada dada es un número, debe devolver el factorial de ese número. 
//El factorial de un número natural n es el producto de los enteros positivos menores o iguales a n. 
//Entonces, 2! = 2, 3! = 6, 4! = 24 y así sucesivamente.

//Caso de prueba:

`const input = 6;`

Result: `720`