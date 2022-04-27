/* Desarrolle un algoritmo que diga el precio de una compra 
La compra se compone del precio del producto y la cantidad
Si el cliente gasta más de $1000 debemos aplicarle un descuento del 10%
*/

// Ingrese el precio del producto
let precioInicialProducto: number = Number(prompt("ingrese el precio"));
let cantidad: number = Number(prompt("ingrese cantidad"));
let precioTotal: number = precioInicialProducto * cantidad;

//Descuento del 10%
let descuentoDiezPorciento: number = 0.1;
//esto es el importe del descuento
let descuento: number = precioInicialProducto * descuentoDiezPorciento;
// resultado con descuento
let resultado2: number = precioInicialProducto - descuento;
//...muestra el precio final del producto...
console.log("Precio total es", resultado1, "el precio final es: ", resultado2);
