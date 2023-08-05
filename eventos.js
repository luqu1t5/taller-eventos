
function saludar(mensaje) {
    alert(mensaje);
}
saludar("Hola");

const saludarDiv = document.getElementById("saludarDiv");

saludarDiv.addEventListener("click", () => {
    saludar('Hola! Soy el div');
});






