// if salyga su vienu scenarijumi
if (100 > 50) {
    console.log("Simtas yra daugiau uz 50")
}


// let pinigai = prompt("Iveskite pinigu skaiciu:");
let pinigai = 5000;

//if else salyga su keliais scenarijais
if (pinigai > 3000) {
  console.log("Jums uztenka atostogoms Maljorkoje");
} else if (pinigai > 1500) {
  console.log("Jums uztenka atostogoms Palangoje");
} else if (pinigai > 800) {
  console.log("Jums uztenka atostogoms Turkijoje");
} else {
  console.log("Jums neuztenka pinigu atostogoms");
}

console.log("Toliau rasom js");

// console.log(typeof pinigai);

switch (Number(pinigai)) {
  case 3000:
    console.log("Jus turite 3000 pinigu");
    console.log("Jus esate turtingas!");
    break;
  case 2000:
    console.log("Jus turite 2000 pinigu");
    break;
  default:
    console.log("Jusu pinigu suma yra nei 3000, nei 2000");
}


// let diena = prompt("iveskite dienos pavadinima");

let diena = "pirmadienis";

switch (diena === "penktadienis") {
    case true:
        console.log("su savaitgaliu");
    break;
    default:
        console.log("Ne penktadienis");
}


let maistas = "obuolys";

if (maistas === "bananas" || maistas === "obuolys") {
    console.log("Vaisius");
}


let balas = prompt("Įveskite įvertinimą");

switch (Number(balas)) {
    case 3:
        console.log("Laimėjote aukso medalį");
    break;
    case 2:
        console.log("Laimėjote sidabro medalį");
    break;
    case 1:
        console.log("Laimėjote bronzos medalį");
    break;
    default:
        console.log("Nieko nelaimėjote");
}


// CIKLAI

// FOR CIKLAS

for (let x = 1; x <= 10; x++) {
    console.log(x);
}


for (let x = 10; x >= 1; x--) {
    console.log(x);
}


for (let x = 3; x <= 100; x += 3) {
    console.log(x);
}


for (let x = 1; x <= 100; x++) {

    if (x % 7 === 0) {
        console.log(x);
    }
}


