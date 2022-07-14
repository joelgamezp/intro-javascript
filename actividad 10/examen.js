### Problema 1:
Crea una función para encontrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia. 
Retorna como resultado un objeto indicando las edades de cada miembro, y la diferencia de edad.
```jsx
const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];
```
Expected result:
```jsx
    {
    oldest: 67,
    youngest: 13,
    'age-difference': 54
  }
```
//Solucion
const result = function() {
    
    let ages = Family.map((fam) => fam.age);
    
    ages.sort(function(a,b){
        return a-b
    });
    
    return {
        oldest: ages[ages.length-1],
        youngest: ages[0],
        'age-difference': ages[ages.length-1] - ages[0] 
      }
    }
    console.log(result());


### Problema 2
Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos.
const numbers = [ 1, -4, 12, 0, -3, 29, -150];
//Solucion
const suma = function() {

    let positivos = numbers.map((numero) => numero >= 1 ? numero : 0);
    return positivos.reduce((a,b) => a + b)
 }
 console.log(suma());


### Problema 3
Cuente las ocurrencias de distintos elementos en la matriz 2D dada. 
La entrada dada es una matriz, cuyos elementos son matrices de cadenas. 
El resultado es un objeto cuyos nombres de propiedad son los valores de las matrices y su valor es el número de sus ocurrencias.
```jsx
const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];
```
Resultado esperado:
```jsx
{
    a: 1,
    b: 1,
    c: 2,
    d: 2,
    f: 2,
    g: 1,
  }
```
### Problema 4
Escriba una función de JavaScript que tomará una serie de números almacenados
y encontrará el segundo número más bajos y segundos más altos, respectivamente
del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]

const arr = [3,4,6,1,5,2,9,10,23,12]
//Solucion
const result = function() {
    arr.sort(function(a,b){
        return a-b
    });

    return {
        segundoBajo : arr[1],
        segundoAlto : arr[arr.length -2 ]
    }
}
console.log(result());

### Problema 5:
De la siguiente estructura de datos, contesta las siguientes preguntas creando un programa para cada una.
```jsx
let info = [
    {
        nombre: "Diego",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 100
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 70
            },
            {
                nombreMateria: "ciencias",
                calificacion: 55
            }
        ]
    },
    {
        nombre: "Jorge",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 60
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 65
            },
            {
                nombreMateria: "ciencias",
                calificacion: 80
            }
        ]
    }
]
```
1. Retorna en un array las calificaciones de todos los estudiantes.
//Solucion
let calificaciones = info.map((alumno) => 
    alumno.materias.map((materia) => materia.calificacion))
    .reduce((s, f) => s.concat(f));
console.log(Array.from(calificaciones));

2. Retorna el promedio de cada uno de los alumnos, devolviendo un arreglo con objetos como esto: 
```jsx
[
  { 
    "Jorge": {
      "promedio": 8.6
    }
  },
  {
    "Alumno": {
      "promedio": 5.5
    }
  },
  {
    "Alumno": {
      "promedio": 5.5
    }
  }
]
```
//Solucion
let promedioAlumnos = info.map((alumno)=> {
    let promedioMaterias = alumno.materias.map((materia) => 
            materia.calificacion).reduce((s, f) => s + f)  / alumno.materias.length;
            return { [alumno.nombre]: { promedio: promedioMaterias }}
        });
        console.log(promedioAlumnos);

1. Retorna la calificación mas baja
//Solucion
let calificacionBaja = info.map((alumno) => 
    alumno.materias.map((materia) => materia.calificacion))
    .reduce((s, f) => s.concat(f)).sort((a,b) => {return a-b})[0];
    console.log(calificacionBaja);

2. Retorna la calificación mas alta
//Solucion
let calificacionAlta = info.map((alumno) => 
    alumno.materias.map((materia) => materia.calificacion))
    .reduce((s, f) => s.concat(f)).sort((a,b) => {return a-b});
    console.log(calificacionAlta[calificacionAlta.length-1]);

### Problema 6
Dadas dos matrices de enteros, encuentra qué elementos faltan en la primera matriz de la segunda matriz.
`matriz = [7,2,5,3,5,3]`
`br = [7,2,5,4,6,3,5,3]`
Los números que faltan en arr son `[4,6]`
//Solucion
let i = 0;
let array = [];

while(i < br.length) {
    if( br[i] == matriz[i] || matriz[i] == undefined ) {
        i++;
        continue;
    }
    array.push(br[i]);
    i++;
  }
  console.log(array);

### Problema 7
**Objetos-Recursividad:**
Dada la siguiente estructura de datos, encuentra la cantidad de veces que está la propiedad `id`
```
const root2 = {
  id: '123',
  child: [{
    id: '234',
    child: [{
      test: {
        id: 2
      }
    }]
  }],
  child2: [{
    id: '345',
    child3: {
      id: '534'
    }
  }]
};
```