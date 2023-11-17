let skaicius = 0;
let herbas = 0;

for (let x = 0; x < 100; x++) {

  let random = Math.random();

  // console.log(random);

  if (random < 0.5) {
    skaicius++;
  } else {
    herbas++;
  }
}

console.log(`Iškrito skaicius: ${skaicius}`);
console.log(`Iškrito skaicius: ${herbas}`);

// Math.random() --- gauni random skaiciu nuo 1 iki 0 

// Math.random() * 10

// Math.floor(Math(random)) * 10


// WHILE CIKLAS

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}


let metimai = 0;
let iskritoSkaicius = false;

while (!iskritoSkaicius) {
  metimai++;

//   let random = Math.random();

//   if (random < 0.5) {
//     iskritoSkaicius = true; 
// }

iskritoSkaicius = Math.random() < 0.5;

}

console.log(`Ismetem moneta ${metimai} kartu, kol iskrito skaicius`);



// console.log(*);
// console.log(**);
// console.log(***);
// console.log(****);
// console.log(*****);

let eglute = "";

for (let x = 0; x < 5; x++) {

  eglute += "*";

  console.log(eglute);
}

console.log("------------");


let eglute2 = "";

for (let a = 4; a >= 0; a--) {
  eglute2 = "";   // nuresetinam reiksme

  for (let b = 0; b <= a; b++) {
    eglute2 += "*";
  }
  
  console.log(eglute2);

}


// *****
// ****
// ***
// **
// *

// for (let a = 4; a >= 0; a--) {
//     console.log(a);
// }

// isorinis ciklas:
// a = 4
// a = 3
// a = 2
// a = 1
// a = 0

// for (let b = 0; b <= a; b++) {
//     vienosEilesZvaigzdutes += "*";
// }

// vidinis ciklas:
// jeigu a = 4
// iretaciju skaicius - 5

// jeigu a = 3
// iretaciju skaicius - 4

// jeigu a = 2
// iretaciju skaicius - 3

// ...


let masyvas = ["raudona", "zalia", "melyna"];

for (let x = 0; x < masyvas.length; x++) {
    console.log(masyvas[x]);
}

masyvas.forEach(
    function (value, index, array) {
        console.log(value);
        console.log(index);
        console.log(array);
    }
);

for (let spalva of masyvas) {
    console.log(spalva);
}




// FUNKCIJOS

function pasisveikinimas(vardas, oras = "debesuota") {
  console.log(`Sveiki, ${vardas}`);
  console.log(`Šiandien yra ${oras}`);
}

pasisveikinimas("Mindaugas");

let k1 = "Jonas";
let k2 = "vėjuota"

pasisveikinimas(k1, k2);


function suma(a, b) {
  return a + b;
}

let k3 = suma(15,87);

console.log(k3);



// prideti menesio ir dienos patikrinima
// "2023-05-09"
// new Date("2023-05-09");
function arPilnametis(gimimoData) {

  let dabartiniaiMetai = new Date().getFullYear();

  if (dabartiniaiMetai - gimimoData < 20) {
      return false; // jeigu false , funkcija toliau nesivykdo
  }

  return true;
}

let manoAmzius = prompt("Iveskite savo gimimo data:");

if (arPilnametis(manoAmzius)) {
  console.log("Jūs esate pilnametis");
} else {
  console.log("Jūs esate nepilnametis");
}