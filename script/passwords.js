const mayusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const minusculas = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numeros = [0,1,2,3,4,5,6,7,8,9]
const simbolos = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"]

const caracteres = mayusculas.concat(minusculas,numeros,simbolos)

const botonGenerar = document.querySelector("button")


const imagenes = ["../assets/agua.avif", "../assets/cielo.avif", "../assets/desierto.avif", "../assets/hurcan.avif", "../assets/lluvia.avif", "../assets/niebla.avif", "../assets/nubes.avif", "../assets/playa.avif", "../assets/prado.avif", "../assets/rayos.avif"]

function imagenFondoRandom() {
    const aleatoria = Math.floor(Math.random() * imagenes.length)
    document.body.style.backgroundImage = `url(${imagenes[aleatoria]})`
}

setInterval(imagenFondoRandom, 15000)

document.addEventListener("DOMContentLoaded", () => {
    imagenFondoRandom()
})

botonGenerar.addEventListener("click", (event) => {
    event.preventDefault()
    
    const longitudContraseña = document.getElementById("tamaño").value
    const section = document.querySelector("section")

    if (longitudContraseña >= 12 && longitudContraseña <= 50) {
        const contraseñaGenerada = generarContraseña(longitudContraseña)
        section.textContent = contraseñaGenerada
    } else {
        alert("La contraseña debe contener entre 12 y 50 caracteres")
    }
})

function generarContraseña(longitud) {
    let contraseña = ""
    
    contraseña += mayusculas[Math.floor(Math.random() * mayusculas.length)]
    contraseña += minusculas[Math.floor(Math.random() * minusculas.length)]
    contraseña += numeros[Math.floor(Math.random() * numeros.length)]
    contraseña += simbolos[Math.floor(Math.random() * simbolos.length)]
    
    for (let i = 4; i < longitud; i++) {
        const caracterAleatorio = caracteres[Math.floor(Math.random() * caracteres.length)]
        contraseña += caracterAleatorio
    }
    
    const contieneMayuscula = contieneCaracter(contraseña, mayusculas)
    const contieneMinuscula = contieneCaracter(contraseña, minusculas)
    const contieneNumero = contieneCaracter(contraseña, numeros)
    const contieneSimbolo = contieneCaracter(contraseña, simbolos)
    
    if (!contieneMayuscula || !contieneMinuscula || !contieneNumero || !contieneSimbolo){
        return generarContraseña(longitud)
    }
    
    return contraseña
}

function contieneCaracter(contraseña, tipoCaracter) {
    return tipoCaracter.some(caracter => contraseña.includes(caracter))
}