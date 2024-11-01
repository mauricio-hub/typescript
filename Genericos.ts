
// Definimos una clase genérica llamada `Caja` que acepta un tipo genérico `T`
// Esto permite que el tipo de datos que maneje la clase se determine al momento de crear la instancia.
class Caja<T> {
    // La propiedad `contenido` es de tipo `T`, que será determinado por el tipo que se pase al instanciar la clase.
    private contenido: T;

    // Constructor que recibe un parámetro `contenido` de tipo `T` y lo asigna a la propiedad `contenido`.
    constructor(contenido: T) {
        this.contenido = contenido;
    }

    // Método que devuelve el valor de `contenido`, manteniendo el tipo `T` que fue definido para la instancia.
    obtenerContenido(): T {
        return this.contenido;
    }

    // Método que permite actualizar el valor de `contenido` con un nuevo valor de tipo `T`.
    // Esto asegura que solo se puede asignar un valor que coincida con el tipo establecido al crear la instancia.
    actualizarContenido(nuevoContenido: T): void {
        this.contenido = nuevoContenido;
    }
}


// Crear una caja para números
const cajaNumeros = new Caja<number>(123);
console.log(cajaNumeros.obtenerContenido()); // Output: 123
cajaNumeros.actualizarContenido(456);        // Válido, es un número
// cajaNumeros.actualizarContenido("texto"); // Error, TypeScript indica que debe ser un número

// Crear una caja para texto
const cajaTexto = new Caja<string>("Hola");
console.log(cajaTexto.obtenerContenido());   // Output: "Hola"
cajaTexto.actualizarContenido("Mundo");      // Válido, es un string
// cajaTexto.actualizarContenido(789);       // Error, TypeScript indica que debe ser un string

// Crear una caja para objetos
type Producto = { nombre: string; precio: number };
const cajaProducto = new Caja<Producto>({ nombre: "Laptop", precio: 1500 });
console.log(cajaProducto.obtenerContenido()); // Output: { nombre: "Laptop", precio: 1500 }
cajaProducto.actualizarContenido({ nombre: "Tablet", precio: 800 }); // Válido, es un Producto
// cajaProducto.actualizarContenido("texto"); // Error, debe ser un Producto
