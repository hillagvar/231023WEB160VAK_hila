const divai = document.getElementsByTagName("div");
const paragrafai = document.getElementsByTagName("p");

Array.from(divai).forEach(function(divas) {
    console.log(divas);
});

Array.from(paragrafai).forEach(function(paragrafas) {
    console.log(paragrafas);
});

// dar vienas variantas:
for (let divas of divai) {
    console.log(divas);
};

// for (let i = 0; i < divai.length; i++) {
//     console.log(divai[i]);
// }

// for (let j = 0; j < paragrafai.length; j++) {
//     console.log(paragrafai[j]);
// }

const spalvoti = document.getElementsByClassName("coloured");

Array.from(spalvoti).forEach(function(spalvotas) {
    console.log(spalvotas);
});

// for (let x = 0; x < spalvoti.length; x++) {
//     console.log(spalvoti[x]);
// }