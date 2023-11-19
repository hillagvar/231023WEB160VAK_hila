let dezute = document.createElement("div");
document.body.prepend(dezute);

let para1 = document.createElement("p");
para1.innerText = "Pirmas paragrafas";
let para2 = document.createElement("p");
para2.innerText = "Antras paragrafas";
let para3 = document.createElement("p");
para3.innerText = "Trečias paragrafas";
let para4 = document.createElement("p");
para4.innerText = "Ketvirtas paragrafas";

dezute.insertAdjacentElement("beforebegin", para1);
dezute.insertAdjacentElement("afterbegin", para2);
dezute.insertAdjacentElement("beforeend", para3);
dezute.insertAdjacentElement("afterend", para4);

para1.remove();
para2.remove();
para3.remove();
para4.remove();
dezute.remove();


