/*Ejercicio 3 - Estructuras de Control - Suma entre Números
Ejercicio entregable: clase 29/04/2022 

Realizado por Dario Lopez - Comision A TDF - 01/05/2022

Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27

¿Qué ocurre si se ingresan los números al revés?
Por ejemplo:
en vez de 1 y 7 se ingresa 7 y 1
en vez de 3 y 9 se ingresa 9 y 3
¿Qué estrategia se puede usar para arreglar este problema?
Recuerden los ejercicios que hicimos antes!
*/

let numeroA: number = Number(prompt("Ingrese primer número"));
let numeroB: number = Number(prompt("Ingrese segundo número"));
/*Se agrega una nueva "regla" por si se ingresa primero
un numero mayor y luego un menor */
let contador, suma: number; 
contador = numeroA;
if (numeroA > numeroB) {
  contador = numeroA; // si B > A intercambio el primero por el segundo.
  numeroA = numeroB;
  numeroB = contador;
}
suma = 0;
for (let contador: number = numeroA; contador <= numeroB; contador++) {
  suma = suma + contador;
}
console.log("La suma de todos los números es:", suma);
//End
