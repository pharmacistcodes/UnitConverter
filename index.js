/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let length = document.getElementsByClassName("length-text")[0]
let volume = document.getElementsByClassName("volume-text")[0]
let mass = document.getElementsByClassName("mass-text")[0]
let conv = document.getElementById("ConvertBtn")


function convert() {
    let input = document.getElementById("inputbox").value
    let meter = input * 3.281
    length.innerHTML = `${input} meters = ${meter.toFixed(3)} feet | ${input} feet = ${(1/meter).toFixed(3)} meters`
     
    let liter = input * 0.264
    volume.innerHTML = `${input} liters = ${liter.toFixed(3)} gallon | ${input} gallon = ${(1/liter).toFixed(3)} liters`
    
    let kilogram = input * 2.204
    mass.innerHTML = `${input} kilos = ${kilogram.toFixed(3)} pounds | ${input} pounds = ${(1/kilogram).toFixed(3)} kilos`
}
