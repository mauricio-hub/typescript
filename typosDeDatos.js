"use strict";
//boolean 
let soyAlto = true;
if (soyAlto) {
    console.log("booleanos --Soy alto");
}
else {
    console.log("booleanos No soy alto");
}
//number
let barcelana = 0;
let madrid = 0;
let flickTeam = 4;
let isFlickManager = true;
let felicidad = "El barcelona le gana al equipo corrupto del madrid";
function sumar(equipo1, equipo2, isFlickManager) {
    if (isFlickManager)
        equipo1 += flickTeam;
    if (equipo1 > equipo2)
        console.log("El Brcelona viola al Madrid y viny llora como un negro marica.", felicidad);
    if (equipo1 === equipo2)
        console.log("Empate");
    if (equipo1 < equipo2)
        console.log("El Madrid viola al Barcelona");
}
sumar(barcelana, madrid, isFlickManager);
/* TIPO ANY */
/*
Declaración del tipo any: Al declarar la variable variable con el tipo any,
le estamos indicando a TypeScript que esta variable puede
contener cualquier tipo de dato. Esto
es útil si el tipo de dato no es conocido
de antemano o si la variable necesita ser flexible.
*/
// Declaramos una variable con el tipo any, lo que significa que puede almacenar cualquier tipo de dato.
let variable;
// Asignamos un número a la variable, lo cual es válido ya que 'any' permite cualquier tipo.
variable = 42;
console.log("Número:", variable); // Salida: Número: 42
// Luego cambiamos el valor a una cadena de texto.
variable = "Hola, mundo!";
console.log("Texto:", variable); // Salida: Texto: Hola, mundo!
// Cambiamos el valor a un arreglo, nuevamente válido con el tipo 'any'.
variable = [1, 2, 3, 4];
console.log("Arreglo:", variable); // Salida: Arreglo: [1, 2, 3, 4]
// Finalmente, asignamos un objeto a la misma variable.
variable = { nombre: "Juan", edad: 25 };
console.log("Objeto:", variable); // Salida: Objeto: { nombre: 'Juan', edad: 25 }
/* TIPO ARRAY */
let numeros = [1, 2, 3, 4, 5];
let nombres = ["Juan", "María", "Ana", "Luis"];
let coleccionNumeros = [1, 2, 3, 4, 5];
let coleccionNombres = ["Juan", "María", "Ana", "Luis"];
// Array de varios tipos de datos
let varios = ["Juan", 42, true];
let varios2 = ["Juan", 42, true];
/* Objetos */
// Definimos un objeto con dos propiedades.
let persona = {
    nombre: "Juan",
    edad: 25,
    teconologias: ["JavaScript", "TypeScript", "Angular", "Node.js"],
    isFreelance: true
};
console.log("objetos...", persona);
// sobre escribimos el objeto.
persona = {
    nombre: "María",
    edad: 30,
    teconologias: ["JavaScript", "Angular", "React", "Vue"],
    isFreelance: false
};
console.log("objetos sobre escrito...", persona);
// Definimos un objeto con el tipo 'Persona'.
let persona2 = {
    nombre: "Mafalda",
    edad: 20,
    teconologias: ["JavaScript", "TypeScript", "Angular", "Node.js"],
};
// Definimos un objeto con el tipo 'Persona'.
let persona3 = {
    nombre: "Cecilia",
    edad: 20,
    teconologias: ["JavaScript", "TypeScript", "Angular", "Node.js"],
    isFreelance: true
};
function saludar(persona) {
    console.log(`Hola ${persona.nombre}`);
}
saludar(persona3);
// Función para filtrar a las personas mayores de 18 años.
// La función toma un array de objetos de tipo Person y devuelve otro array de Person.
function filterAdults(people) {
    // Usamos el método filter para iterar sobre cada persona en el array
    // y seleccionamos solo aquellas personas cuya edad es mayor o igual a 18.
    return people.filter(person => person.age >= 18);
}
// Creamos un array de objetos Person para usar como ejemplo.
// Cada objeto tiene un nombre (name) y una edad (age).
const people = [
    { name: "Juan", age: 17 },
    { name: "Ana", age: 22 },
    { name: "Pedro", age: 15 },
    { name: "Laura", age: 30 }
];
// Llamamos a la función filterAdults y pasamos el array de personas.
// La función nos devolverá solo las personas con 18 años o más.
const adults = filterAdults(people);
// Mostramos en consola el resultado, que debería ser un array con las personas mayores de 18 años.
console.log('ADULTS', adults); // Output: [{ name: "Ana", age: 22 }, { name: "Laura", age: 30 }]
