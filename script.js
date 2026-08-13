// Función para abrir el menú lateral
function abrirMenu() {
    document.getElementById("miMenuLateral").style.width = "250px";
    document.getElementById("fondoOscuro").style.display = "block";
}

// Función para cerrar el menú lateral
function cerrarMenu() {
    document.getElementById("miMenuLateral").style.width = "0";
    document.getElementById("fondoOscuro").style.display = "none";
}

// Función para copiar texto al portapapeles
function copiarTexto(idElemento) {
    // Se obtiene el texto exacto del elemento mediante su ID
    let texto = document.getElementById(idElemento).innerText;

    // Se ejecuta la API del portapapeles
    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado al portapapeles: " + texto);
    }).catch(function(err) {
        console.error("Error al intentar copiar el texto: ", err);
        alert("Hubo un error al copiar el texto. Puede seleccionarlo y copiarlo manualmente.");
    });
}