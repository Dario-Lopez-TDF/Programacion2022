//Ejercicio: cálculo de descuento..
let precioInicialProducto: number = Number(prompt("ingrese el precio"));
//Precio inicial del producto
let descuentoDiezPorciento: number = 0.1;
//Descuento del 10%
let descuento: number = precioInicialProducto * descuentoDiezPorciento;
//esto es el importe del descuento
let resultado: number = precioInicialProducto - descuento;
//...muestra el precio final del producto...
console.log("el precio final es: ", resultado);

//Realizado por Dario Lopez - Comision A TDF - 23/04/2022
