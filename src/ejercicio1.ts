let numero1: number = Number(prompt("ingrese el precio"));
let numero2: number = Number(prompt("ingrese el % de descuento"));

let descuento: number = numero1 * numero2;

let resultado: number = numero1 - descuento;

console.log("el resultado es: ", resultado);
