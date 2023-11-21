function rastiIlgiausiaZodi(masyvas) {
  let spltMasyvas;
  let ilgiausioZodzioIlgis;
  let ilgiausioZodzioReiksme;
  let ilgiausiZodziai = [];

  for (let x = 0; x < masyvas.length; x++) {
    ilgiausioZodzioIlgis = 0;
    ilgiausioZodzioReiksme = "";
    spltMasyvas = masyvas[x].split(" ");

    for (let i = 0; i < spltMasyvas.length; i++) {
      if (spltMasyvas[i].length > ilgiausioZodzioIlgis) {
        ilgiausioZodzioIlgis = spltMasyvas[i].length;
        ilgiausioZodzioReiksme = spltMasyvas[i];
      }
    }
    ilgiausiZodziai.push(ilgiausioZodzioReiksme);
  }
  return ilgiausiZodziai;
}

let posts = [
  "Sveikinu radus darbą",
  "Ar tikrai pabaigus kursą viskas bus gerai",
  "Javascript nėra Java",
  "Rasti video medžiagą visada šaunu",
];

console.log(rastiIlgiausiaZodi(posts));
