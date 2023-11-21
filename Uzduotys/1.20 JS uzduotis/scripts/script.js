let divai = document.getElementsByTagName("div");
let klases = [];

//removeAttribute("class")
for (let divas of divai) {
    klases.push(divas.classList[0]);
    divas.classList.remove(divas.classList[0]);
}

console.log(klases);

// let klases = ["square","circle","triange","rectangle","pentagon"];

// for (let i = 0; i < divai.length; i++) {
//         divai[i].classList.add(klases[i]);
// }

for (let i = 0; i < divai.length; i++) {
    let divas = divai[i];
    let klase = klases[i];
    divas.classList.add(klase);
}