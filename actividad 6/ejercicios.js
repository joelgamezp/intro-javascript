//Ejercicio 1
var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']
var comingSoonAnimals = ['panter', 'dragon', 'turtle']

var newAnimals = animals.concat(comingSoonAnimals);
console.log(newAnimals);

//Ejercicio 2
var array = [ 4, 6, 1, 0, 8, 2, 45, 11, 5, 33, 50, 101 ]
console.log(array.sort(function(a,b){
    return a-b
}));

//Ejercicio 3
comingSoonAnimals.push("cow");
console.log(comingSoonAnimals);

//Ejercicio 4
animals.shift();
console.log(animals);

//Ejercicio 5
let indexParrot = animals.indexOf("parrot");
console.log(indexParrot);
