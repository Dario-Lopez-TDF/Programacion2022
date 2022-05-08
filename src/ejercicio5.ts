/*Estructuras de Control
Cantidad y Distribución de Positivos

• Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total
*/

// a) ingresar numeros hasta que se ingrese el 0

let cantNumTotal: number = 0; // suma el total de los numeros ingresados
let cantNumPositivos: number = 0; // suma el total de numeros > mayor a 0 = Positivos
let porcentajeNumPositivos: number = 0; // calculo del porcentaje de numeros positivos
//let minNum: number = 9999;
let numero = Number(prompt("ingrese numero"));

while (numero !== 0) {
  if (numero > 0) {
    // b) detecta si el numero es positivo o no.
    cantNumPositivos++; // c) suma los numeros positivos
  }
  cantNumTotal++; // d) suma el total de numeros ingresados
  // e) contunuar ingresado numeros distintos de "0" (cero)
  numero = Number(prompt("ingrese numero"));
}
if (cantNumTotal > 0) {
  porcentajeNumPositivos = (cantNumPositivos / cantNumTotal) * 100;

  console.log(
    cantNumPositivos,
    "positivos",
    porcentajeNumPositivos,
    "% del total"
  );
}
