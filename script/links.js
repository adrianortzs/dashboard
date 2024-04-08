const botonAñadir = document.querySelector("button")
const section = document.querySelector("section")

let contador = 0

document.addEventListener("DOMContentLoaded", () => {
})

botonAñadir.addEventListener("click", (event) => {
    event.preventDefault()

    contador ++
    
    const link = document.getElementById("link").value
    const nombreGuardado = document.getElementById("nombre-guardado").value
    const valores = {nombre: nombreGuardado, link: link}
    localStorage.setItem(`Link ${contador}`, JSON.stringify(valores))
    
    section.innerHTML += `
    <ul>
    <li>${nombreGuardado}</li>
    <li>${link}</li>
    <li><button class="borrar-link">Borrar</button></li>
    </ul>`

    if (link === "" && nombreGuardado === ""){
        console.log("Rellena todos los campos")
    }

    // const botonBorrar = document.getElementsByClassName("borrar-link")
    
    // botonBorrar.addEventListener("click", () => {
    //     section.innerHTML = ""
    // })
})
