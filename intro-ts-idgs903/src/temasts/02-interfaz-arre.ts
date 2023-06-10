// Para cumplir con la estructura del tipado
interface Alumno{
    matricula:number,
    nombre:string,
    email:string
};

//Definición de un objeto
const alumno:Alumno = {
    nombre: "Citlalli",
    matricula: 12345,
    email: "citlalli@gmail.com"
};

//Array es un tipo especifico de colección
let mascotas:Array<String> = ["perro", "gato", "perico"];
mascotas[1] = "Shhhhhh";
mascotas.push("Shhhh");

//Definición de un arreglo
let tem:(number|String)[] = [];
tem.push("nombre");
tem.push(224);

console.log(alumno);
console.table(mascotas);
console.log(tem);

//Para exportar al main
export{}