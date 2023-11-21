let divai = document.getElementsByTagName("div");

//removeAttribute("class")
for (let divas of divai) {
    divas.classList.remove(divas.classList[0]);
}

let klases = ["square","circle","triange","rectangle","pentagon"];

for (let i = 0; i < divai.length; i++) {
        divai[i].classList.add(klases[i]);
}
