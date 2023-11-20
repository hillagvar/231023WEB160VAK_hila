let darbuotojai = [
  {vardas: "Petras", pozicija: "dizaineris", atlyginimas: 1600},
  {vardas: "Laura", pozicija: "administratorė", atlyginimas: 1100},
  {vardas: "Asta", pozicija: "buhalterė", atlyginimas: 1300},
];

console.log(darbuotojai);


darbuotojai.map(function(darbuotojas) {
  darbuotojas.buvesAtlyginimas = darbuotojas.atlyginimas;
  
  let atlyginimoKoef = Math.floor(Math.random() * 21 + 10);

  darbuotojas.atlyginimas = darbuotojas.atlyginimas + darbuotojas.atlyginimas * atlyginimoKoef/100;

  darbuotojas.algosPalyginimas = function() {
    console.log(`Darbuotojo ${this.vardas} alga padidėjo nuo ${this.buvesAtlyginimas} iki ${this.atlyginimas} (${Math.round((this.atlyginimas/this.buvesAtlyginimas-1)*100)}%)`);
  }
  return darbuotojas;

});

console.log(darbuotojai);


darbuotojai[0].algosPalyginimas();
darbuotojai[1].algosPalyginimas();
darbuotojai[2].algosPalyginimas();



