//Ejercicio 1

let array = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];

for(let i = 0; i < array.length; i++) {
	
  if( Number(array[i]) > 3 ) {
  	console.log(array[i]);
   }

}

//Ejercicio 2
let array = [];
let i = 0;

while(i < 5) {
    i++;
    
    array.push(i);
}
console.log(array);

//Ejercicio 3
let array = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];
console.log(array.sort(function(a,b){
    return a-b
}));