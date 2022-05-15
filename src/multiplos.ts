/*function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

let num1: number = Number(prompt("Ingrese dividendo"));
let num2: number = Number(prompt("Ingrese divisor"));
let resultado: number = 0;

let multiplo: boolean = esMultiplo(num1, num2);

if (multiplo === true) {
  console.log("Es multiplo");
} else {
  console.log("No es multiplo");
}