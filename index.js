/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")
let conv = document.getElementById("ConvertBtn")


function convert() {
    let number = document.getElementById("inputbox").value
    let meter = number * 3.281
    let feet = number / 3.281
    length.innerHTML = `${number} meters = ${meter} feet | ${number} feet = ${feet.toFixed(3)} meters`
     
    let liter = number * 0.264
    let gallon = number / 0.264
    volume.innerHTML = `${number} liters = ${liter} gallon | ${number} gallon = ${gallon.toFixed(3)} liters`
    
    let kilogram = number * 2.204
    let pound = number / 2.204
    mass.innerHTML = `${number} kilos = ${meter} pounds | ${number} pounds = ${feet.toFixed(3)} kilos`
}
