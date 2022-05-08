/*
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
*/

/////Multiplos de 2 y 3 (% 2 == 0  y % 3 == 0) El resto da 0...
// Algoritmo múltiplo
/*
let indice: number;
let cadena: string = "";
for (let indice: number = 1; indice <= 100; indice++) {
  if (indice % 2 === 0 || indice % 3 === 0) {
    cadena = cadena + indice + "";
  }
}
console.log(cadena);



// Encontrar el numero Máximo

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
