/*Ejercicio 2: 26/04/2022 
Realizado por Dario Lopez - Comision A TDF - 27/04/2022
Estructura de Control – Selección Simple
Ejercicio – Determinar Medalla
Desarrolle un algoritmo que, dada una posición en
una carrera se determine el tipo de medalla a
entregar. Tenga en cuenta que para el primer puesto se
entrega medalla de oro, segundo puesto medalla
de plata y tercer puesto medalla de bronce. En
caso que quede en otra posición se entrega
certificado de participación
*/

// Se ingresa la psosicion de llegada
let posicionLlegada: number = Number(prompt("Ingrese su posicion de llegada"));

if (posicionLlegada === 1) {
  console.log("Entregar Medalla de ORO");
} else {
    if (posicionLlegada === 2) { 
      console.log("Entregar Medalla de PLATA");
      } else {
          if (posicionLlegada === 3) { 
          console.log("Entregar Medalla de BRONCE");
          } else {
              if (posicionLlegada >=4 ) { 
            console.log("Entregar mención de participación")
          } 
        } 
      }