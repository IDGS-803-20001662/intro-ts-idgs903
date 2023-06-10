
// funcion que regresa void y no recibe parametros
function suma0()
{

}

function suma():void
{
    console.log(3+6);
}

suma();

//No tiene un tipo de datos en los parametros, es decir, son "any"
function suma2(a:any, b:any):void {
    console.log(a + b);
}

suma2(5,2);
suma2("Citlalli","Martinez");

//Parametros con tipado
function suma3(a:number, b:number):void {
    console.log(a + b);
}

suma3(13,5);

//Con retorno
function suma4(a:number, b:number):number {
    return a + b;
}

console.log(suma4(19,10));

function multiplicar (n1:number, otronumero?:number, nuevonumero=3): number {
    let temp = n1 * nuevonumero;
    return temp;
}

//Valores posicionales
console.log(multiplicar(3)); // ->  otronumero?:number
console.log(multiplicar(9,10));
console.log(multiplicar(9,0,10));

//Arrow functions
const sumar5 = (a:number, b:number):string => 
{
    return `${a+b}`;
}

console.log(sumar5(9,10));

//Funciones con objetos
interface Mascota 
{
    nombre:string,
    edad:number;
    mostrarEdad: () => void;
}

function calcular(mascota:Mascota, x:number): void 
{
    mascota.edad += x;
    console.log(mascota);
}

const nuevaMascota:Mascota = 
{
    nombre: "Juan",
    edad: 3,
    mostrarEdad()
    {
        console.log("La edad es: ", this.edad);
    }
}

calcular(nuevaMascota,5);
nuevaMascota.mostrarEdad();

//Funciones anonimas
//Sirve para optimizar el codigo, asignando directamente una operación a un código
const funcSumar = function(valor1:number, valor2:number): number
{
    return valor1 + valor2;
}
console.log(funcSumar(5,7));


//Funciones con parametros opcionales
function calcular2(n1:number, n2:number, n3?:number):number 
{
    if(n3)
        return n1+n2+n3;
    else
        return n1+n2;
}
console.log(calcular2(1,2,3));
console.log(calcular2(1,2));


//Funciones con parametros REST
//Puedes ingresar un el numero de valores que quieras como parametro de la función
function calcular3(...valores:number[])
{
    let suma = 0;
    for(let x=0; x<valores.length; x++)
        suma+=valores[x];
    return suma;
}
console.log(calcular3(10,2,3,4));
console.log(calcular3(10,2,3,4,2,3));

export{}