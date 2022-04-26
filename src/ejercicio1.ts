//Realizado por Dario Lopez - Comision A TDF - 23/04/2022
//Ejercicio: cálculo de descuento..

// Ingrese el precio del producto
let precioInicialProducto: number = Number(prompt("ingrese el precio"));
//Descuento del 10%
let descuentoDiezPorciento: number = 0.1;
//esto es el importe del descuento
let descuento: number = precioInicialProducto * descuentoDiezPorciento;
// resultado con descuento
let resultado: number = precioInicialProducto - descuento;
//...muestra el precio final del producto...
console.log("el precio final es: ", resultado);


