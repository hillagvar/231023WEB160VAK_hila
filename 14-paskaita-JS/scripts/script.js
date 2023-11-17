
// Jeigu ikeliame si script.js faila HTML head elemente, tada reikia sito:
// document.addEventListener("DOMContentLoaded", function() {

// Čia rasom visa su DOM'u susijusi JS kodą.

// });



//sukuriam tuscia p elementa
let paragrafas = document.createElement("p");

//idedu i p elemento vidu teksta
paragrafas.innerText = "Kažkoks paragrafo tekstas";

//patalpinu p elementa i body elemento gala
document.body.append(paragrafas);

// document.body.prepend -- patalpinti i prieki

let antraste = document.createElement("div");
antraste.innerHTML = "<h2> JS antraštė </h2>";

document.body.prepend(antraste);

// JS SELEKTORIAI

let body = document.body;
console.log(body);

let paveiksleliai = document.images;
console.log(paveiksleliai);

//grazina pati elementa
let paragrafasSuId = document.getElementById("paragrafo-id");
console.log(paragrafasSuId);

//getElementsBy... grazina HTMLCollection
let picsumPhotos = document.getElementsByTagName("img");
console.log(picsumPhotos);

let paveiksleliaiSuKlasemis = document.getElementsByClassName("pav");
console.log(paveiksleliaiSuKlasemis);

//randa pirma ir ji viena pasirenka
let paragrafasGalerijoje = document.querySelector("div.gallery p");
console.log(paragrafasGalerijoje);

//randa visus ir juos sudeda i NodeList
let paragrafaiGalerijoje = document.querySelectorAll("div.gallery p");
console.log(paragrafaiGalerijoje);

// pakeisti stiliaus atributus elementui
paragrafasSuId.style.color = "red";
paragrafasSuId.style.backgroundColor = "black";

paveiksleliai[0].style.width = "300px";

console.log(paragrafasSuId.style);


// Gauti elemento atributo reikšmę
console.log(paveiksleliai[0].getAttribute("src"));

// Pakeisti elemento atributo reikšmę
paveiksleliai[0].setAttribute("src", "https://picsum.photos/id/10/200/200");


// let pagrindineAntraste = document.querySelector("h1");
// pagrindineAntraste.innerText = "Naujas antraštės tekstas";

document.querySelector("h1").innerText = "Naujas antraštės tekstas";

//pridedam elementui klase
paragrafasGalerijoje.classList.add("active");

//pasalinam klase
paragrafasGalerijoje.classList.remove("kazkokia-klase");

//pasalinam, jei yra. pridedam, jei nera
paragrafasGalerijoje.classList.toggle("ijungimas");
paragrafasGalerijoje.classList.toggle("ijungimas");

let naujasAntrastesElementas = document.createElement("h3");
naujasAntrastesElementas.innerText = "Naujas antraštės elementas";

// ideti elementa i konkrecia vieta
document.querySelector("div.gallery").prepend(naujasAntrastesElementas);

//paskutinis paveikslelis su klase.
paveiksleliaiSuKlasemis[
  paveiksleliaiSuKlasemis.length - 1
].insertAdjacentElement("afterend", naujasAntrastesElementas);



let mygtukas = document.getElementById("magic-button");

mygtukas.onclick = function () {
  console.log("MYGTUKAS BUVO PASPAUSTAS!");
};

let mygtukas2 = document.getElementById("magic-button-2");

// mygtukas2.addEventListener("click", function () {
//   if (document.body.style.backgroundColor === "orange") {
//     document.body.style.backgroundColor = "green";
//   } else {
//     document.body.style.backgroundColor = "orange";
//   }
// });

mygtukas2.addEventListener("click", function() {
    document.body.classList.toggle("change-bg");
    });