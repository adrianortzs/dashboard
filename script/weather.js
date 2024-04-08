const apiKey = "e2053aba2498460e86e160942240804"

async function fetchApi() {
    try {
        const response = await fetch(`https://www.weatherapi.com/v1`)
        const data = await response.json()
        console.log(data)
    }
    catch {

    }
}