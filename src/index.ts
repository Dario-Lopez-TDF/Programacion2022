let n1: number = (Number = prompt("Escribe un número"));
let i: number;
let contar: number = 0;
for (i = 0; i <= n1; i++) {
  if (n1 % i === 0) {
    contar++;
    console.log("cuenta", contar, "divisor", i);
  }
}

let numero = prompt("Escribe un número");
let i;
let contarDivisores: number = 0;
//let totalDivisores:number;
for (i = 0; i <= numero; i++) {
  if (numero % i === 0) {
    contarDivisores++;
    // totalDivisores = ;

    //console.log(numeros," lo divide ");
    console.log("iteración", contarDivisores, "divisor =", i);
  }
}
console.log("total", contarDivisores);
