interface ICita {
    mostrarresumen(paciente: string, medico: string, fecha: Date, valor: number): string;
}

class Cita implements ICita {
    private _paciente;
    private _medico;
    private _fecha;
    private _valor;

    constructor(paciente: string, medico: string, fecha: Date, valor: number) {
        this._paciente = paciente;
        this._medico = medico;
        this._fecha = fecha;
        this._valor = valor;
    }

    public get paciente() {
        return this._paciente;
    }
    public set paciente(value) {
        this._paciente = value;
    }

    public get medico() {
        return this._medico;
    }
    public set medico(value) {
        this._medico = value;
    }

    public get fecha() {
        return this._fecha;
    }
    public set fecha(value) {
        this._fecha = value;
    }

    public get valor() {
        return this._valor;
    }
    public set valor(value) {
        this._valor = value;
    }

    mostrarresumen(paciente: string, medico: string, fecha: Date, valor: number): string {
        return `paciente:${paciente}, Medico:${medico}, Fecha:${fecha}, Valor:${valor}`
    }

    Calcularcosto(): number {
        return this.valor;
    }
}
class CitaGen extends Cita{
    TarifaAdicional: number;
    constructor(paciente: string, medico: string, fecha: Date, valor: number, TarifaAdicional: number ){
    super(paciente,medico,fecha,valor)
    this.TarifaAdicional = TarifaAdicional;
    }
    Calcularcosto(): number {
        return this.valor + this.TarifaAdicional;
    }
}
class CitaEspecial extends Cita{
    TarifaEspec:number;
    constructor(paciente: string, medico: string, fecha: Date, valor: number, TarifaEspec:number){
        super(paciente,medico,fecha,valor)
        this.TarifaEspec= TarifaEspec;
    }
    Calcularcosto(): number {
        return this.valor + this.TarifaEspec;
    }
}
class Medico {
    nombre:string;
    especialidad:string;
    tarifaBase:number;
    constructor(nombre:string , especialidad:string , tarifaBase:number){
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.tarifaBase = tarifaBase;
    }
    mostrarPerfil():string {
        return `Medico:${this.nombre} Especialidad:${this.especialidad} TarifaBase:${this.tarifaBase}`
    }
}

const medico1=new Medico("Jeffry","Cardiologo",250000);
    const medico2= new Medico("Santiago","Dermatologo",500000);

const Citas1 = new Cita("Carlos",medico1.nombre,new Date(),medico1.tarifaBase);
const CitaEspecial1 = new CitaEspecial("Juana",medico2.nombre,new Date(),medico2.tarifaBase,100000);
const CitaGen1 = new CitaGen("Andres",medico2.nombre,new Date(),medico2.tarifaBase, 80000);

let arrayCita = [];
arrayCita.push(Citas1,CitaEspecial1,CitaGen1);

arrayCita.forEach(element => {
    console.log(element.mostrarresumen(element.paciente,element.medico, element.fecha, element.Calcularcosto()));
});
