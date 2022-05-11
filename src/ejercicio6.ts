/* 
Realizar el ejercicio de la calculadora con 4 operaciones
(suma, resta, multiplicacion y division)
utilizando Switch y la funcion dibujarLineas

Realizado por Dario Lopez - Comision A TDF - 11/05/2022
*/

function dibuLinea() {
  //Función dibujar una linea de 40 guiones dentro de la calculadora.
  let linea: string = "-";
  for (let i: number = 0; i <= 40; i++) {
    linea = linea + "-";
  }
  console.log(linea);
}

// Ingresar numeros por consola (num1 = Número 1 y num2 = Número 2)
let num1: number = Number(prompt("ingresar 1º numero"));
let num2: number = Number(prompt("ingresar 2º numero"));
let opcion: number = Number(
  prompt(
    "ingresar 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir, cualquier otra tecla para salir"
  )
);
let resultado: number = 0; //Nos mostrará el resultado de la operación seleccionada.

switch (opcion) {
  case 1: // suma de los números
    resultado = num1 + num2;
    dibuLinea(); // llamo a la función dibuLinea
    console.log("El resultado de la operación (suma) es:", resultado);
    dibuLinea(); // llamo a la función dibuLinea
    break;
  case 2:
    resultado = num1 - num2; // resta de los números
    dibuLinea(); // llamo a la función dibuLinea
    console.log("El resultado de la operación (resta) es:", resultado);
    dibuLinea(); // llamo a la función dibuLinea
    break;
  case 3:
    resultado = num1 * num2; // multiplicación de los números
    dibuLinea(); // llamo a la función dibuLinea
    console.log("El resultado de la operación (multiplicación) es:", resultado);
    dibuLinea(); // llamo a la función dibuLinea
    break;
  case 4:
    resultado = num1 / num2; // división de los números
    dibuLinea(); // llamo a la función dibuLinea
    console.log("El resultado de la operación (división) es:", resultado);
    dibuLinea(); // llamo a la función dibuLinea
    break;
  default:
    console.log("la operación No es válida");
}
//End
