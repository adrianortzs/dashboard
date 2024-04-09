document.addEventListener("DOMContentLoaded", () => {
    const botonAñadir = document.querySelector("button")
    const section = document.querySelector("section")
    
    let contador = 0

    cargarLocalStorage()

    botonAñadir.addEventListener("click", (event) => {
        event.preventDefault()
        contador ++
        
        const link = document.getElementById("link").value
        const nombreGuardado = document.getElementById("nombre-guardado").value
        const valores = {nombre: nombreGuardado, link: link}

        if (link !== "" && nombreGuardado !== "") {
            localStorage.setItem(`Link ${contador}`, JSON.stringify(valores))
            añadirLinks(nombreGuardado, link)
        } else {
            alert("Rellena todos los campos")
        }
    })

    function cargarLocalStorage() {
        for (let i = 0; i < localStorage.length; i++) {
            const clave = localStorage.key(i)
            const valor = JSON.parse(localStorage.getItem(clave))
            añadirLinks(valor.nombre, valor.link)
        }
    }

    function añadirLinks(nombre, link) {
       const lista = document.createElement("ul")
       lista.innerHTML += `
        <li>${nombre}</li>
        <li><a href="${link}" target="_blank">${link}</a></li>
        <li><button class="borrar-link">Borrar</button></li>`

        section.appendChild(lista) 

        const botonBorrar = lista.querySelector(".borrar-link")

        botonBorrar.addEventListener("click", function() {
            lista.remove()
            eliminarLocalStorage(nombre, link)
        })
    }

    function eliminarLocalStorage(nombre, link) {
        for (let i = 0; i < localStorage.length; i++) {
            const clave = localStorage.key(i)
            const valor = JSON.parse(localStorage.getItem(clave))
            if (valor.nombre === nombre && valor.link === link){
                localStorage.removeItem(clave)
                break
            }
        }
    }
})

