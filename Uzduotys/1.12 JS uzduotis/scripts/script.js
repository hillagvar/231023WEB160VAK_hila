function Darbuotojas(vardas, pozicija, atlyginimas, patirtiesMetai) {
  this.vardas = vardas;
  this.pozicija = pozicija;
  this.atlyginimas = atlyginimas;
  this.patirtiesMetai = patirtiesMetai;
}; 

let darbuotojai = [
  new Darbuotojas("Jonas", "pardavėjas", 10800, 6),
  new Darbuotojas("Asta", "valytoja", 9600, 10 ),
  new Darbuotojas("Paulius", "vadybininkas", 14400, 3),
  new Darbuotojas("Antanas", "vyr. vadybininkas", 24000, 5),
  new Darbuotojas("Virginija", "direktorė", 30000, 7)
];

console.log(darbuotojai);

let darbuotojai2 = darbuotojai.filter(function(darbuotojas) {
  return darbuotojas.atlyginimas < 30000 && darbuotojas.patirtiesMetai > 5;
});

console.log(darbuotojai2);