"use strict";
class Pelicula {
    constructor(nombre, protagonista, director) {
        this.nombre = nombre;
        this.protagonistas = protagonista;
        this.director = director;
    }
    proyectada() {
        console.log(`La pelicula ${this.nombre} esta proyectada en el cine`);
    }
    // presupuesto de la pelicula
    presupuesto(presupuesto) {
        console.log(`El presupuesto de la pelicula es de ${presupuesto} dolares`);
    }
}
const pelicula1 = new Pelicula("El señor de los anillos", ["Elija Wood", "Ian Mckellen", "Liv Tyle"], "Peter Jackson");
console.log(pelicula1);
pelicula1.proyectada();
pelicula1.presupuesto(10000000);
