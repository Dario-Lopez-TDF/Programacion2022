//Ejercicio 1: cálculo de descuento..
//Realizado por Dario Lopez - Comision A TDF - 23/04/2022

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

// Ejercicio 2: autos de carrera..
//Realizado por Dario Lopez - Comision A TDF - 24/04/2022

// Aqui se ingresan los tiempos de las vueltas...
let tiempoPrimerVuelta: number = Number(
  prompt("ingrese el tiempo de la primer vuelta")
);
let tiempoSedundaVuelta: number = Number(
  prompt("ingrese el tiempo de la segunda vuelta")
);
let tiempoTercerVuelta: number = Number(
  prompt("ingrese el tiempo de la tercer vuelta")
);
let tiempoCuartaVuelta: number = Number(
  prompt("ingrese el tiempo de la cuarta vuelta")
);
// Suma de los tiempos de las vueltas
let tiempoTotal: number =
  tiempoPrimerVuelta +
  tiempoSedundaVuelta +
  tiempoTercerVuelta +
  tiempoCuartaVuelta;
// Promedio de tiempos de las vueltas
let tiempoPromedioTotal: number = tiempoTotal / 4;

console.log("El tiempo total es: ", tiempoTotal, "segundos");
console.log(
  "El tiempo promedio de vuelta es: ",
  tiempoPromedioTotal,
  "segundos"
);
