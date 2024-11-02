"use strict";
// Ahora podemos usar el tipo `User` para definir un usuario.
const user1 = {
    id: 1,
    name: "Mafalda",
    email: "mafalda@example.com",
    isActive: true
};
// Ejemplo de función que toma un parámetro de tipo `User`.
function greetUser(user) {
    console.log(`Hola, ${user.name}! Tu email es ${user.email}.`);
}
// Llamamos a la función `greetUser` pasando `user1`, que cumple con el tipo `User`.
greetUser(user1);
