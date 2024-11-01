class Pelicula {
    nombre?: string;
    protagonistas?: string[];
    director?: string;

    constructor(nombre:string,protagonista:string[],director:string){
        this.nombre = nombre;
        this.protagonistas = protagonista;
        this.director = director;
    }


    proyectada():void{
        console.log(`La pelicula ${this.nombre} esta proyectada en el cine`);
    }

    // presupuesto de la pelicula
    presupuesto(presupuesto:number):void{
        console.log(`El presupuesto de la pelicula es de ${presupuesto} dolares`);
    }

}


const pelicula1 = new Pelicula("El señor de los anillos",["Elija Wood", "Ian Mckellen","Liv Tyle"],"Peter Jackson");

console.log(pelicula1);

pelicula1.proyectada();
pelicula1.presupuesto(10000000);