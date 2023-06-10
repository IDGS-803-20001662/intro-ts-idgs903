interface Alumno
{
    matricula:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}

interface Grupo
{
    grupo:string;
    year:number;
}

const alumno1: Alumno = {
    matricula:12345,
    nombre:'Mario',
    edad:23,
    correo:'mario@gmail.com',
    grupo:{
        grupo:'idgs',
        year:2023
    }
}

//Forma comun de acceso a las propiedades, poniendo toda la jerarquia
console.log(`La matricula es: ${alumno1.matricula}`);
console.log(`El año del grupo es es: ${alumno1.grupo.year}`);

//Acceder a la propiedad del objeto sin tener que poner toda la jerarquia del objeto
const{matricula, nombre:nom, grupo: xx} = alumno1; 
//matricula = matricula, nombre=nom de la información del objeto alumno1
const{grupo, year:annio} = xx //Corchete porque es objeto
//grupo = grupo, year = annio del objeto xx, que era el objeto grupo
console.log(`La matricula es: ${matricula}`);
console.log(`El nombre es es: ${nom}`);
console.log(`El grupo es: ${grupo}`);
console.log(`El año del grupo es es: ${annio}`);

//Desestructuracion posicional para arreglos
const gps:string[] = ['IDGS', 'IEVN', 'IRIC'];

//Forma de acceso normal
console.log(`Grupo 1: ${gps[0]}`);
console.log(`Grupo 2: ${gps[1]}`);
console.log(`Grupo 3: ${gps[2]}`);

//Forma con desestructuracion
const[a,,b]=gps; //El segundo no tiene alias, esta ignorado en la desestructuración
console.log(`Grupo 1: ${a}`);
console.log(`Grupo 3: ${b}`);

export{}
