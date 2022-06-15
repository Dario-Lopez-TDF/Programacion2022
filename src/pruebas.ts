let arreglo: number[] = new Array(6);
let i: number;
let j: number;
let aux: number;

for (i = 0; i < arreglo.length; i++) {
  //CARGO ARREGLO
  arreglo[i] = Number(prompt("Ingrese Numero " + (i + 1) + ": "));
}

for (i = 0; i < arreglo.length; i++) {
  //MUESTRO ARREGLO
  console.log(arreglo[i]);
}

for (i = 0; i < arreglo.length - 1; i++) {
  //ORDENO DE MENOR A MAYOR EL ARREGLO
  for (j = i + 1; j < arreglo.length; j++) {
    if (arreglo[i] > arreglo[j]) {
      aux = arreglo[i];
      arreglo[i] = arreglo[j];
      arreglo[j] = aux;
    }
  }
}
console.log("ARREGLO ORDENADO DE MENOR A MAYOR"); //IMPRIMO EL ARREGLO ORDENADO
for (i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}

/*/ contador de divisores con while..

let numero: number = Number(prompt("Numero"));
let i: number = 1;

while (i <= numero) {
  if (numero % i === 0) {
    console.log(i);
  }
  i++;
}

// Clase Viernes 13/05/22 practica con Leandro
//  MODULARIZACION - armado de funciones (repetidas o en modulos)
/* Funciones con parametros

function dibuLinea(numero: number) {
  let linea: string = "";
  for (let i: number = 0; i < numero; i++) {
    linea = linea + "-";
  }
  return linea;
  //console.log(linea); es reemplazado por "return" y desligo el consolelog de la funcion.
}

for (let j: number = 1; j <= 10; j++) {
  console.log(dibuLinea(j));
}



//////////////////////
// 
let num1: number = 1;
let num2: number = 2;
let operacion: number = 3;


function operarNumeros(num1:number, num2:number, operacion): number{  
if (operacion === 1) 
  return num1 + num2;
  return num1 - num2;
}

console.log(operarNumeros(num1, num2, operacion));

//////// Area de un triangulo

let base: number =1;
let altura: number=2;
let area: number;

area = (base * altura) / 2; 


function calcularAreaTriangulo(base:number, altura:number): number{
   return (base * altura) / 2;
}



function calculoPotencia() {
  //Función cálculo axuliar de potenciación.
  if (numExponente === 0) {
    resultado = 1;
  } else {
    resultado = numBase ** numExponente;
  }
  console.log(
    "El resultado de:",
    numBase,
    "elevado a",
    numExponente,
    "es igual a:",
    resultado
  );
}
// Ingresar numeros por consola (numbase = Número Base y numExponente = Exponente o potencia)
let numBase: number = Number(prompt("Ingrese numero base"));
let numExponente: number = Number(prompt("Ingrese numero exponente"));
let resultado: number = 0;

if (numExponente >= 0) {
  calculoPotencia(); // llamo a la función cálculo de potenciación.
} else {
  console.log("La operación es invalida o la potencia es erronea");
}



/*
let num1: number = Number(prompt("ingresar 1º numero"));
let num2: number = Number(prompt("ingresar 2º numero"));
let opcion: number = Number(
  prompt("ingresar 1 para sumar, 2 para restar,  otra tecla corta")
);
let resultado: number = 0;

if (opcion === 1) {
  resultado = num1 + num2;
  dibulinea();
  console.log("el resultado de la operación es:", resultado);
  dibulinea();
} else if (opcion === 2) {
  resultado = num1 - num2;
  dibulinea();
  console.log("el resultado de la operación es:", resultado);
  dibulinea();
} else {
  console.log("cuenta no valida");
}
// IMPORTANTE: Hacer con "switch case" y agragar division y multiplicacion.
// TAREA ENTREGABLE CON SWITCH ver "ejercicio6y7.ts"

/*
// LOGING
let clave: String = prompt("su clave");
let intentos: number = 0; //contador
let continuar: String = "y";

while (intentos < 2 && continuar == "y") {
  if (clave === "eureka") {
    console.log("Bienvenido");
    continuar = "n";
  } else {
    console.log("clave incorrecta");
    clave = prompt("ingrese su clave nuevamente"); //Solo al errar la primera clave
  }
  intentos++; // cuenta los intentos sumando de a 1 hasta 3 veces
}
if (continuar === "y") {
  console.log("Ha agotado todas las posibilidades");
}


/////Multiplos de 2 y 3 (% 2 == 0  y % 3 == 0) El resto da 0...
// Algoritmo múltiplo

let indice: number;
let cadena: string = "";
for (let indice: number = 1; indice <= 100; indice++) {
  if (indice % 2 === 0 || indice % 3 === 0) {
    cadena = cadena + indice + "";
  }
}
console.log(cadena);



//Encontrar el numero Máximo

// a) ingresar numeros hasta que se ingrese el 0

let continuar: number = 1;
let numero: number;
let maxNum: number = -9999;
let minNum: number = 9999;

while (numero !== 0) {
  numero = Number(prompt("ingrese numero"));
  continuar = Number(prompt("continue"));
  // b) determina el numero maximo
  if (numero > maxNum) {
    maxNum = numero;
  }
  // c) determina el numero minimo
  if (numero < minNum) {
    minNum = numero;
  }
}
console.log("valor maximo: " + maxNum);
console.log("valor minimo: " + minNum);
*/
