// Definimos un tipo personalizado para representar la información de un usuario.
type User = {
    // `id` es un identificador único de tipo número.
    id: number;

    // `name` representa el nombre completo del usuario, es de tipo string.
    name: string;

    // `email` es el correo electrónico del usuario, también es un string.
    email: string;

    // `isActive` es un booleano que indica si el usuario está activo o no.
    isActive: boolean;
}

// Ahora podemos usar el tipo `User` para definir un usuario.
const user1: User = {
    id: 1,
    name: "Mafalda",
    email: "mafalda@example.com",
    isActive: true
};

// Ejemplo de función que toma un parámetro de tipo `User`.
function greetUser(user: User): void {
    console.log(`Hola, ${user.name}! Tu email es ${user.email}.`);
}

// Llamamos a la función `greetUser` pasando `user1`, que cumple con el tipo `User`.
greetUser(user1);
