let kIsorinis = "Isorinis Tekstas";

function funkcija() {

  // galima naudoti, bet bloga praktika, painu
  console.log(kIsorinis);

  let kVidinis = "Vidinis Tekstas";
}

// negalima naudoti
// console.log(kVidinis);

// funkcija();


//neribotas parametru skaicius
function daugParametru(...parametrai) {
  console.log(parametrai);
  suma = 0;

  parametrai.forEach(function (value)
  {
    suma += value;
  } )

  console.log(suma);
}

daugParametru(1,5,6,8,9,15,31);


function pasisveikinimas() {
  console.log("Sveiki");
}

// alternatyvus funkcijos aprasymas, arrow functions
let pasisveikinimas2 = () => {
  console.log("Sveiki");
}

pasisveikinimas2();


function pliusDu (x) {
  return x + 2;
}

pliusDu(5);

console.log(pliusDu(5));

// alternatyva pliusDu aprasymui
// return tokiu atveju nerasom, grazins mums x+2
const pliusDu2 = (x) => x + 2;

let grazintaReiksme = pliusDu2(10);
console.log(grazintaReiksme);

const pliusDu3 = x => x + 2;
console.log(pliusDu3(16));


function apskaiciuotiKvadrata(skaicius) {
  console.log(`Kvadrato kraštinė yra: ${skaicius}`);
  console.log(`Kvadrato plotas yra: ${skaicius*skaicius}`);
  console.log(`Kvadrato perimetras yra: ${skaicius*4}`);
}

apskaiciuotiKvadrata(5);


// let knygosPavadinimas = "Ziedu Valdovas";
// let knygosAutorius = "J. R. R. Tolkien";

// let knygosMasyvas = ["Ziedu Valdovas", "J. R. R. Tolkien"];
// console.log(knygosMasyvas[0], knygosMasyvas[1]);


// OBJEKTAS

//sukurimas
let knyga = {
  //ypatybes
  pavadinimas: "Sidharta",
  autorius: "H. Hesse",
  //metodas
  pristatymas: function(leidejas = "Vaga") {
    console.log(`Leidėjas: ${leidejas}`);
    console.log(`${this.autorius} knyga - ${this.pavadinimas}.`);
  }
};

//ypatybiu naudojimas
console.log(knyga.pavadinimas);
console.log(knyga["autorius"]);

//metodo iskvietimas
knyga.pristatymas();

//prideti nauja ypatybe metai
knyga.metai = 1987;

//pakeisti ypatybes pavadinimas reiksme
knyga.pavadinimas = "Stepių vilkas";

console.log(knyga);

delete knyga.autorius;

console.log(knyga);

if ("autorius" in knyga) {
  console.log("Knygos objektas turi ypatybę autorius");
}

if ("pavadinimas" in knyga) {
  console.log("Knygos objektas turi ypatybę pavadinimas");
}


let zmogus = {
  vardas: "Jonas",
  amzius: 21,
  prisistatymas : function() {
    console.log(`Aš esu ${this.vardas}, man yra ${this.amzius} metai.`)
  }
}

zmogus.prisistatymas();


function Filmas(pavadinimas, rezisierius, metai) {
  this.pavadinimas = pavadinimas;
  this.rezisierius = rezisierius;
  this.metai = metai;
  this.pristatymas = function() {
    console.log(`${this.rezisierius} filmas - ${this.pavadinimas}.`);
  }
} 

let indianaJones = new Filmas("Indiana Jones", "Steven Spielberg", 2000);
let avatar = new Filmas("Avataras", "James Cameron", 2010);

console.log(indianaJones);
console.log(avatar);

avatar.pristatymas();
indianaJones.pristatymas();


// PAPILDOMA

let tekstas = "Kažkoks tekstas";

console.log(tekstas.toUpperCase());
console.log(tekstas.toLowerCase());

let daugNereikalinguTarpu = "         tekstas         ";
console.log(daugNereikalinguTarpu.trim());

let zodis = "Lietuva";

console.log(zodis[3]);
console.log(zodis.indexOf('v'));

console.log(zodis.slice(3,5));
console.log(zodis.slice(zodis.indexOf('t'),zodis.indexOf('v')));

let sakinys = "Pavyzdinis sakinys su keliais keliais keliais žodžiais";
let naujasSakinys = sakinys.replace("keliais", "penkiais");
let naujasSakinys2 = sakinys.replaceAll("keliais", "penkiais");

console.log(naujasSakinys);
console.log(naujasSakinys2);
console.log(naujasSakinys2.length);

console.log(Math.floor(1.8));
console.log(Math.round(1.8));

console.log(parseInt(1.568));
console.log(parseInt("2.588"));


let skaiciuMasyvas = [1,5,9,16,20,4,6,7];

let naujasSkaiciuMasyvas = skaiciuMasyvas.map(function(skaicius) {
  return skaicius * 10;
});

// alternatyva su arrow function
// let naujasSkaiciuMasyvas = skaiciuMasyvas.map(skaicius => skaicius * 10);

console.log(naujasSkaiciuMasyvas);


let filmai = [
  new Filmas("Filmas 1", "Režisierius 1", 1996),
  new Filmas("Filmas 2", "Režisierius 2", 1998),
  new Filmas("Filmas 3", "Režisierius 3", 2005),
  new Filmas("Filmas 4", "Režisierius 4", 2010),
  new Filmas("Filmas 5", "Režisierius 5", 2021),
];

let naujasFilmuMasyvas = filmai.filter(function(filmas) {
  return filmas.metai >= 2000;
});

// let naujasFilmuMasyvas = filmai.filter(filmas => filmas.metai >= 2000);

console.log(naujasFilmuMasyvas);


