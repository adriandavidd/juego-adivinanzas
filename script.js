let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById("numeroEntrada");

let mensaje = document.getElementById("mensaje");

function comprobarResultado() {
  let numeroIngresado = parseInt(numeroEntrada.value);

  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    mensaje.textContent = "El numero debe estar entre 1 y 100";
    mensaje.style.color = "red";
    return;
  }
  if (numeroIngresado === numeroAleatorio) {
    mensaje.textContent = "¡Felicitaciones es el numero correcto!";
    mensaje.style.color = "green";
    return;
  }
  if (numeroIngresado < numeroAleatorio) {
    mensaje.textContent = "El numero debe ser mayor";
    mensaje.style.color = "red";
    return;
  }
  if (numeroIngresado > numeroAleatorio) {
    mensaje.textContent = "El numero debe ser menor";
    mensaje.style.color = "red";
  }
}
