const saludo = document.getElementById("roberto")
const div = document.getElementById("manolo")
saludo.addEventListener("click", () => {
    alert("Hola")
})
div.addEventListener("click", (even) => {
    if (even.target.id !== "roberto") {
        alert("Hola, Soy el Div, alias manolo.")
    }
})
