
const boton = document.querySelector("#switch");

boton.addEventListener("click", () => {
    boton.classList.toggle("active");
    document.body.classList.toggle("dark");

    // Guardamos el modo en localStorage OJO PORQUE LOCALSTORAGE SOLO PUEDE ALMACENAR VALORES DE TIPO CADENA DE TEXTO !!!!
    
    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark-mode", "true");
    } else {
        localStorage.setItem("dark-mode", "false");
    }
});

// Obtenemos el modo actual

if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark");
    boton.classList.add("active");
} else {
    document.body.classList.remove("dark");
    boton.classList.remove("active");
}