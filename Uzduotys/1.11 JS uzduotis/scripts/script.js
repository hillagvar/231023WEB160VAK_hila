let darbuotojai = [
  {vardas: "Petras", pozicija: "dizaineris", atlyginimas: 1600},
  {vardas: "Laura", pozicija: "administratorė", atlyginimas: 1100},
  {vardas: "Asta", pozicija: "buhalterė", atlyginimas: 1300},
];

console.log(darbuotojai);


darbuotojai = darbuotojai.map(function(darbuotojas) {
  return {...darbuotojas, buvesAtlyginimas : darbuotojas.atlyginimas};
});

darbuotojai = darbuotojai.map(function(darbuotojas) {
  return {...darbuotojas, atlyginimas : darbuotojas.atlyginimas + darbuotojas.atlyginimas * (Math.floor(Math.random() * 21 + 10))/100
  };
});

console.log(darbuotojai);


darbuotojai = darbuotojai.map(function(darbuotojas) {
  return {...darbuotojas, algosPalyginimas : function() {
    let procentas = Math.round((this.atlyginimas/this.buvesAtlyginimas-1)*100);
    console.log(`Darbuotojo ${this.vardas} alga padidėjo nuo ${this.buvesAtlyginimas} iki ${this.atlyginimas} (${procentas}%)`);
  }};
});

// console.log(darbuotojai);

darbuotojai[0].algosPalyginimas();
darbuotojai[1].algosPalyginimas();
darbuotojai[2].algosPalyginimas();



