const apiKey = "e2053aba2498460e86e160942240804"
const city = "Madrid"

const ciudadYpais = document.getElementById("ciudad-pais")
const clima = document.getElementById("clima")
const grados = document.getElementById("grados")
const otrosDatos = document.getElementById("otros-datos")
const sectionPrevisiones = document.getElementById("previsiones")

document.addEventListener("DOMContentLoaded", () => {
    fetchUbicacion()
    
})

async function fetchUbicacion() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`)
        const data = await response.json()

        const arrayPrevision = data.forecast.forecastday[0].hour
        const prevision = arrayPrevision.map(hour => {
            return {
                imagen: hour.condition.icon,
                grados: hour.temp_c,
                hora: hour.time
            }
        })

        console.log(prevision)

        const datosCiudad = {
                ciudad: data.location.region,
                pais: data.location.country
            }

        const datosTiempo = {
                estado: data.current.condition.text,
                imagenEstado: data.current.condition.icon,
                grados: `${data.current.temp_c}°`,
                precipitaciones: data.current.precip_in,
                humedad: data.current.humidity,
                velocidadViento: data.current.wind_kph
            }

        ciudadYpais.innerHTML = `<span>${datosCiudad.ciudad}</span><span>${datosCiudad.pais}</span>`

        clima.textContent = datosTiempo.estado

        grados.innerHTML = `<img src=${datosTiempo.imagenEstado} alt=${datosTiempo.estado}><span>${datosTiempo.grados}</span>`

        otrosDatos.innerHTML = `<span>${datosTiempo.precipitaciones}</span><span>${datosTiempo.humedad}</span><span>${datosTiempo.velocidadViento}</span>`

        prevision.forEach(hour => {
            sectionPrevisiones.innerHTML += `<span>${hour.hora}</span><img src=${hour.imagen}><span>${hour.grados}</span>`
        })

    }
    catch(error) {
        console.error('Error fetching countries:', error)
    }
}
