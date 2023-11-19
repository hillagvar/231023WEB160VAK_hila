let divas = document.createElement("div");
document.body.prepend(divas);

let paragrafas = document.createElement("p");
paragrafas.innerText = "Pusė trijų nakties, labai smagu";
divas.append(paragrafas);

let nuotrauka = document.createElement("img");
nuotrauka.setAttribute("src", "https://picsum.photos/250/250");
divas.append(nuotrauka);

let nuoroda = document.createElement("a");
nuoroda.innerText = "(Ne)spauskite ant nuorodos";
nuoroda.setAttribute("href", "https://delfi.lt");
nuoroda.style.display = "block";
divas.append(nuoroda);


// document.querySelector("div").append(nuoroda);
