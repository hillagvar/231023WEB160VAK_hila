const divai = document.getElementsByTagName("div");
const paragrafai = document.getElementsByTagName("p");

console.log(divai);
console.log(paragrafai);

for (i = 0; i < divai.length; i++) {
    console.log(divai[i]);
}

for (j = 0; j < paragrafai.length; j++) {
    console.log(paragrafai[j]);
}

const spalvoti = document.getElementsByClassName("coloured");

for (x = 0; x < spalvoti.length; x++) {
    console.log(spalvoti[x]);
}