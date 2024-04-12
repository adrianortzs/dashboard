const imagenes = ["../assets/agua.avif", "../assets/arboles.avif", "../assets/desierto.avif", "../assets/colores.avif", "../assets/lluvia.avif", "../assets/niebla.avif", "../assets/nubes.avif", "../assets/puesta.avif", "../assets/vistas.avif", "../assets/rayos.avif"]

function imagenFondoRandom() {
    const aleatoria = Math.floor(Math.random() * imagenes.length)
    document.body.style.backgroundImage = `url(${imagenes[aleatoria]})`
}

setInterval(imagenFondoRandom, 15000)

document.addEventListener("DOMContentLoaded", () => {
    imagenFondoRandom()
})
