"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `El ganador del sorteo es ${this.nombre} con el numero de ticket: ${this.ticket}`;
    }
}
let sorteo = new Sorteo("Mafalta");
sorteo.setTicket(123);
console.log(sorteo.sortear());
