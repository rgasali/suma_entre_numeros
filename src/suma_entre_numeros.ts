//declaracion de variables

let numBase = <HTMLInputElement>document.getElementById("numBase");
let numFinal = <HTMLInputElement>document.getElementById("numFinal");
let btnSumaEntreNumeros = <HTMLButtonElement>(
  document.getElementById("btnSumaEntreNumeros")
);
let divSumaEntreNumeros = <HTMLDivElement>(
  document.getElementById("divSumaEntreNumeros")
);
let valorBase: number;
let valorFinal: number;
let contador: number;
let valoresSumados: number = 0;

btnSumaEntreNumeros.addEventListener("click", () => {
  valorBase = Number(numBase.value);
  console.log(valorBase);
  valorFinal = Number(numFinal.value);
  console.log(valorFinal);
  contador = Number(numBase.value);
  console.log(contador);

  while (contador < valorFinal) {
    contador++;
    valoresSumados = valorBase + contador;
    valorBase = valoresSumados;
    contador = contador++;
  }
  divSumaEntreNumeros.innerHTML = `la suma de los numeros entre los valores es ${valoresSumados}`;
});
