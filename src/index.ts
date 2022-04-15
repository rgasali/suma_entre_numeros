//DECLARACION DE VARIABLES
let clave = <HTMLInputElement>document.getElementById("clave");
let btnClave = <HTMLButtonElement>document.getElementById("btnClave");
let divMensaje = <HTMLDivElement>document.getElementById("mensaje");
let valorClave: string;
let oportunidades = 2;

btnClave.addEventListener("click", () => {
  valorClave = clave.value;
  if (valorClave === "eureka") {
    divMensaje.innerHTML = "la contraseña es correcta";
    oportunidades = 3;
  } else {
    divMensaje.innerHTML = `la contraseña es incorrecta, le quedan ${oportunidades} intentos`;
    if (oportunidades === 0) {
      btnClave.disabled = true;
    }
  }
  oportunidades--;
});
