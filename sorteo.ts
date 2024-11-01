class Sorteo<T>{

    private ticket?: T;

    constructor (private nombre: string){
        
    }

    setTicket(ticket: T){
        this.ticket = ticket;
    }

    getTicket(){
        return this.ticket;
    }

    public sortear():string{
      return `El ganador del sorteo es ${this.nombre} con el numero de ticket: ${this.ticket}`;
    }

}

let sorteo = new Sorteo<number>("Mafalta");

sorteo.setTicket(123);

console.log(sorteo.sortear());