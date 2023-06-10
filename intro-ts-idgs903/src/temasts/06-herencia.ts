class persona3
{
    protected nombre:string;
    protected edad:number;
    
    constructor(nombre:string, edad:number)
    {
        this.nombre=nombre;
        this.edad=edad;
    }

    imprimir()
    {
        console.log(`Nombre: ${this.nombre} y edad: ${this.edad}`);
    }
}

class Empleado extends persona3
{
    private sueldo:number;

    constructor(nom:string, edad:number, sueldo:number)
    {
        super(nom,edad);
        this.sueldo = sueldo;
    }

    imprimir()
    {
        super.imprimir();
        console.log(`Sueldo: ${this.sueldo}`);
    }
}

export{}