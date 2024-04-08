const tiempo = document.getElementById("tiempo")
const frase = document.getElementById("frase")

function actualizarHora() {
    const horaActual = new Date()

    const dia = horaActual.getDate()
    const mes = horaActual.getMonth() + 1
    const año = horaActual.getFullYear()

    const diaFormateado = dia < 10 ? `0${dia}` : dia
    const mesFormateado = mes < 10 ? `0${mes}` : mes

    const fechaFormateada = `${diaFormateado}/${mesFormateado}/${año}`

    const segundos = horaActual.getSeconds()
    const minuto = horaActual.getMinutes()
    const hora = horaActual.getHours()

    const segundosFormateados = segundos < 10 ? `0${segundos}` : segundos
    const minutoFormateado = minuto < 10 ? `0${minuto}` : minuto
    const horaFormateada = hora < 10 ? `0${hora}` : hora

    tiempo.textContent = `${horaFormateada}:${minutoFormateado}:${segundosFormateados} - ${fechaFormateada}`

    let mensaje = ""

    if (hora >= 0 && hora < 7) {
        mensaje = "Es hora de descansar. Apaga y sigue mañana"
    } else if (hora >= 7 && hora < 12) {
        mensaje = "Buenos días, desayuna fuerte y a darle al código"
    } else if (hora >= 12 && hora < 14) {
        mensaje = "Echa un rato más pero no olvides comer"
    } else if (hora >= 14 && hora < 16) {
        mensaje = "Espero que hayas comido"
    } else if (hora >= 16 && hora < 18) {
        mensaje = "Buenas tardes, el último empujón"
    } else if (hora >= 18 && hora < 22) {
        mensaje = "Esto ya son horas extras, ... piensa en parar pronto"
    } else {
        mensaje = "Buenas noches, es hora de pensar en parar y descansar"
    }
    frase.textContent = mensaje
}

setInterval(actualizarHora, 1000)

actualizarHora()