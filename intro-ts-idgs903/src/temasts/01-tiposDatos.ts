var num1 = 2; //Variable global para reciclarla en todo el codigo
let num2 = 3; //Permanece dentro de una estructura
const num3 = 4; //Un valor que no se modifica

//TYPESCRIPT = Tipado de datos se ajusta a las caracteristicas de un archivo de javascript, transpilación de código

let nombre = 'Citlalli'; //lo identifica automaticamente como String, es inferido
let nombre2:string = 'Citlalli'; //Se señala el tipo de dato
let num:number = 1;
let activo:boolean = true;

let matricula:number|string|boolean = 20000; //Se puede colocar más de un tipo de dato
matricula = '22SAD2';
matricula = false;

console.log(matricula);

export{}

