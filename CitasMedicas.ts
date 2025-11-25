interface ICita {
    paciente: string;
    fecha: Date;
    mostrarresumen(): string;
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

    mostrarresumen(): string {
        return `paciente:${this.paciente}, Medico:${this.medico}, Fecha:${this.fecha}, Valor:${this.valor}`
    }

    Calcularcosto(): number {
        return this.valor;
    }
}