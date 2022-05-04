/*Estructura de Control - Selección
Ejercicio – Aumento de Sueldo

• Una empresa desea premiar a sus empleados con un
aumento de sueldo. 
Sueldo Actual Sueldo con Aumento
0 - 15.000 $ 20%
15.001 - 20.000 $ 10%
20.001 - 25.000 $ 5%
Más de 25.000 $ No hay aumento
• Desarrolle un algoritmo dado el salario actual de un
empleado determine el aumento de sueldo a aplicar y
se lo muestre

Realizado por Dario Lopez - Comision A TDF - 04/05/2022
*/

let sueldoActual: number = Number(prompt("Ingrese su suendo actual"));
let aumento: number = 0;
let nuevoSueldo: number = 0;
let aumentoGral: boolean = true;
if (sueldoActual < 25000) {
  aumento = true;
} else {
  aumento = false;
}

switch (aumento) {
  case true:
    if (0 < sueldoActual && sueldoActual <= 15000) {
      console.log(
        "Su aumento es del 20 % su nuevo sueldo es de:" +
          " " +
          sueldoActual * 1.2 +
          " " +
          "pesos"
      );
    } else if (15001 < sueldoActual && sueldoActual <= 20000) {
      console.log(
        "Su aumento es del 10 % su nuevo sueldo es de:" +
          " " +
          sueldoActual * 1.1 +
          " " +
          "pesos"
      );
    } else if (20001 < sueldoActual && sueldoActual < 25000) {
      console.log(
        "Su aumento es del 5 % su nuevo sueldo es de:" +
          " " +
          sueldoActual * 1.05 +
          " " +
          "pesos"
      );
    }

    break;
  case false:
    console.log(
      "Su sueldo es mayor a 25000 pesos. Usted no tiene aumento de sueldo"
    );
    break;
}
//End
