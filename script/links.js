document.addEventListener("DOMContentLoaded", () => {
    const botonAñadir = document.getElementById("boton-añadir")
    const section = document.querySelector("section")

    let contador = 0
    
    cargarLocalStorage()
    
    const imagenes = ["../assets/agua.avif", "../assets/cielo.avif", "../assets/desierto.avif", "../assets/hurcan.avif", "../assets/lluvia.avif", "../assets/niebla.avif", "../assets/nubes.avif", "../assets/playa.avif", "../assets/prado.avif", "../assets/rayos.avif"]

    imagenFondoRandom()

    function imagenFondoRandom() {
        const aleatoria = Math.floor(Math.random() * imagenes.length)
        document.body.style.backgroundImage = `url(${imagenes[aleatoria]})`
    }

    setInterval(imagenFondoRandom, 15000)

    botonAñadir.addEventListener("click", (event) => {
        event.preventDefault()
        contador ++
        
        const enlace = document.getElementById("enlace").value
        const nombreEnlace = document.getElementById("nombre-enlace").value
        const valores = {nombre: nombreEnlace, link: enlace}

        if (enlace !== "" && nombreEnlace !== "") {
            localStorage.setItem(`Link ${contador}`, JSON.stringify(valores))
            añadirLinks(nombreEnlace, enlace)
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
        <li><button class="boton-borrar">Borrar</button></li>`

        section.appendChild(lista) 

        const botonBorrar = lista.querySelector(".boton-borrar")

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

