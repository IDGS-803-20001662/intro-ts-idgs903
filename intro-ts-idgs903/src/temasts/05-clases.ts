class Persona
{
    //Propiedades
    nombre:string = '2';
    edad:number = 2;

    //Constructor
    constructor(nombre:string, edad:number)
    {
        this.nombre = nombre;
        this.edad = edad;
    }

    //Métodos
    imprimir()
    {
        console.log(`Nombre: ${this.nombre} y edad: ${this.edad}`);
    }
}

let persona1:Persona;
persona1 = new Persona('Juan',23);
persona1.imprimir();

///Modificadores de acceso
class Dado{
    private valor: number=0;
    public tirar(){
        this.ganerar();
    }
    private ganerar(){
        this.valor = Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`Salio el valor ${this.valor}`);
    }
}

let dado1 = new Dado();
dado1.tirar();
dado1.imprimir();

// con el constructor se puede inicializar las propiedades de la clase sin declararlas
class Persona3 {
    constructor(public nombre:string, public edad:number){}
    imprimir(){
        console.log(`Nombre: ${this.nombre},Edad: ${this.edad}`);
    }
}

let persona3:Persona3;
persona3 = new Persona3('Juan', 23);
persona3.imprimir();


//Con el export se puede usar las clases en otros archivos
export{}