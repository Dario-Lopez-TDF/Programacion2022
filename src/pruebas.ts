// Clase Martes 10/05/22 practica con Brian
//  MODULARIZACION - armado de funciones (repetidas o en modulos)

function dibulinea() {
  let linea: string = "-";
  for (let i: number = 0; i <= 40; i++) {
    linea = linea + "-";
  }
  console.log(linea);
}

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
