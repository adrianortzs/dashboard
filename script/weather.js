const apiKey = "e2053aba2498460e86e160942240804"
const city = "Madrid"

async function fetchUbicacion() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`)
        const data = await response.json()

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

        console.log(datosCiudad)
        console.log(datosTiempo)
    }
    catch(error) {
        console.error('Error fetching countries:', error)
    }
}

fetchUbicacion()