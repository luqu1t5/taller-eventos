function saludar(mensaje) {
  alert(mensaje);
}

const saludarDiv = document.getElementById("saludarDiv");

saludarDiv.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") {
    saludar('Hola! Soy el div');
  }
});

const btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener("click", () => {
  saludar('Hola! Soy el botón');
});
