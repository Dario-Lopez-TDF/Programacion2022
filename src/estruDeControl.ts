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

*/
