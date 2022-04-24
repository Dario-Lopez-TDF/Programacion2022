// Ejercicio autos de carrera..
let tiempoPrimeraVuelta: number = Number(prompt("ingrese el tiempo de la primera vuelta"));
let tiempoSedundaVuelta: number = Number(prompt("ingrese el tiempo de la segunda vuelta"));
let tiempoTercerVuelta: number = Number(prompt("ingrese el tiempo de la tercer vuelta"));
let tiempoCuartaVuelta: number = Number(prompt("ingrese el tiempo de la cuarta vuelta"));
// Aqui se eingresan los tiempos de las vueltas...
let tiempoTotal: number = tiempoPrimeraVuelta + tiempoSedundaVuelta + tiempoTercerVuelta + tiempoCuartaVuelta;
// Suma de los tiempos de las vueltas
let tiempoPromedioTotal: number = tiempoTotal / 4;
// Promedio de tiempos de las vueltas


console.log("El tiempo total es: ", tiempoTotal, "segundos");
console.log("El tiempo promedio de vuelta es: ", tiempoPromedioTotal, "segundos");

//Realizado por Dario Lopez - Comision A TDF - 24/04/2022