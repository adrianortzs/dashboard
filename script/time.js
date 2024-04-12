const relojDigital = document.getElementById("reloj-digital")
const frase = document.getElementById("frase")

const imagenes = ["../assets/agua.avif", "../assets/arboles.avif", "../assets/desierto.avif", "../assets/colores.avif", "../assets/lluvia.avif", "../assets/niebla.avif", "../assets/nubes.avif", "../assets/puesta.avif", "../assets/vistas.avif", "../assets/rayos.avif"]

function imagenFondoRandom() {
    const aleatoria = Math.floor(Math.random() * imagenes.length)
    document.body.style.backgroundImage = `url(${imagenes[aleatoria]})`
}

setInterval(imagenFondoRandom, 15000)

document.addEventListener("DOMContentLoaded", () => {
    imagenFondoRandom()
})

function actualizarHora() {
    const fechaYhora = new Date()

    const dia = fechaYhora.getDate()
    const mes = fechaYhora.getMonth() + 1
    const año = fechaYhora.getFullYear()

    const diaFormateado = dia < 10 ? `0${dia}` : dia
    const mesFormateado = mes < 10 ? `0${mes}` : mes

    const fechaFormateada = `${diaFormateado}/${mesFormateado}/${año}`

    const segundos = fechaYhora.getSeconds()
    const minutos = fechaYhora.getMinutes()
    const horas = fechaYhora.getHours()

    const segundosFormateados = segundos < 10 ? `0${segundos}` : segundos
    const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos
    const horasFormateadas = horas < 10 ? `0${horas}` : horas

    relojDigital.textContent = `${horasFormateadas}:${minutosFormateados}:${segundosFormateados} - ${fechaFormateada}`

    let mensaje = ""

    if (horas >= 0 && horas < 7) {
        mensaje = "Es hora de descansar. Apaga y sigue mañana"
    } else if (horas >= 7 && horas < 12) {
        mensaje = "Buenos días, desayuna fuerte y a darle al código"
    } else if (horas >= 12 && horas < 14) {
        mensaje = "Echa un rato más pero no olvides comer"
    } else if (horas >= 14 && horas < 16) {
        mensaje = "Espero que hayas comido"
    } else if (horas >= 16 && horas < 18) {
        mensaje = "Buenas tardes, el último empujón"
    } else if (horas >= 18 && horas < 22) {
        mensaje = "Esto ya son horas extras, ... piensa en parar pronto"
    } else {
        mensaje = "Buenas noches, es hora de pensar en parar y descansar"
    }
    frase.textContent = mensaje
}

actualizarHora()

setInterval(actualizarHora, 1000)
