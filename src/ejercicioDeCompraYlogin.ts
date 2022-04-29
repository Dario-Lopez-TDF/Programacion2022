/*Desarrolle un algoritmo que diga el precio de una compra 
La compra se compone del precio del producto y la cantidad
Si el cliente gasta más de $1000 debemos aplicarle un descuento del 10%
Estructura de Control – Selección Simple 
*/

//Se ingresa el precio del producto por teclado
let precioInicialProducto: number = Number(prompt("ingrese el precio"));
// Se ingresa la cantidad del producto por teclado
let cantidad: number = Number(prompt("ingrese cantidad"));
// Es el precio TOTAL del producto (sin descuento)
let precioTotal: number = precioInicialProducto * cantidad;
//Descuento del 10%
let descuentoDiezPorciento: number = 0.1;
//esto es el importe del descuento
let descuento: number = precioTotal * descuentoDiezPorciento;
//Es el precio del producto con descuento
let precioDescuento: number = precioTotal - descuento;

if (precioTotal >= 1000) {
  // muestra el precio final del producto con 10% de descuento
  console.log("Por gastar mas de 1000 tiene un 10% de descuento: ", precioDescuento); 
} else {
  //.muestra el precio final del producto SIN descuento
  console.log("El monto final a pagar es: ", precioTotal);
}

// Revisar para acortar el codigo y la formula del descuento.
let monto : number = dato1.value;
let cantidad : number = dato2.value;
let montoConDescuento : number = 0;
let descuento : number = 0;
let precioTotal : number = 0;
precioTotal = monto * cantidad;
if (precioTotal >= 1000) {
descuento = (precioTotal *10)/100;
montoConDescuento = precioTotal - descuento;
console.log("Por gastar mas de 1000 tiene un 10% de descuento.");
console.log("El monto a pagar es: " + montoConDescuento);
} else {
console.log("No tiene descuento. El monto a pagar es: " + precioTotal);
}






/*
//Ejercicio - Login

• Desarrolle un algoritmo que permita loguearse (registrarse)
a un sistema, ingresando un nombre de usuario y la
contraseña adecuada.
• Considerar que tanto el usuario como la contraseña están
formados sólo por letras.
• El sistema deberá validar que el usuario y la contraseña
sean correctas, comparándolas con lo que es sistema tiene
registrado para ese usuario. Tenga en cuenta que el sistema
tiene registrado el usuario: Juan y la clave claveJuan

let usuario : string = "Juan";
let clave : string = "claveJuan";
let userIngresado : string = prompt("ingrese nombre de usuario")); 
let claveIngresada : string = (prompt("ingrese su clave"));
if (usuario == userIngresado && clave == claveIngresada) {
console.log("Bienvenido");
} else {
console.log("El usuario o la clave son incorrectos");
}
