//Ejercicio: cálculo de descuento..
let numero1: number = Number(prompt("ingrese el precio"));
//Precio inicial del producto
let numero2: number = 0.1;
//Descuento del 10%
let descuento: number = numero1 * numero2;
//esto es el importe del descuento
let resultado: number = numero1 - descuento;
//...muestra el precio final del producto...
console.log("el precio final es: ", resultado);
