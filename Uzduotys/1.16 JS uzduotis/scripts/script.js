const pirmasDivas = document.querySelector("div:nth-of-type(1)");

const antrasDivas = document.querySelector("div:nth-of-type(2)");

const treciasDivas = document.querySelector("div:nth-of-type(3)");

// console.log(pirmasDivas);
// console.log(antrasDivas);
// console.log(treciasDivas);

pirmasDivas.innerText = "Du gaideliai, Du gaideliai, Baltus žirnius kūlė. Dvi vištelės, Dvi vištelės Į malūną vežė.";

antrasDivas.innerHTML = "Du gaideliai, Du gaideliai, <b>Baltus žirnius</b> kūlė. Dvi vištelės, Dvi vištelės Į malūną vežė.";

treciasDivas.textContent = "Du gaideliai, Du gaideliai, Baltus žirnius kūlė. Dvi vištelės, Dvi vištelės Į malūną vežė.";

console.log(pirmasDivas);
console.log(antrasDivas);
console.log(treciasDivas);

pirmasDivas.innerText = "<b> Labas </b>";
antrasDivas.innerHTML = "<b> Labas </b>";
treciasDivas.textContent = "<b> Labas </b>";

