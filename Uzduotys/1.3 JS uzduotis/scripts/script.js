function arPilnametis(gimimoData) {
  let dabartiniaiMetai = new Date().getFullYear();
  let dabartinisMenuo = new Date().getMonth() + 1;
  let dabartineDiena = new Date().getDate();

  let gimimoMetai = Number(gimimoData.slice(0, 4));
  let gimimoMenuo;
  let gimimoDiena;

  if (gimimoData.slice(5, 6) === "0") {
    gimimoMenuo = Number(gimimoData.slice(6, 7));
  } else gimimoMenuo = Number(gimimoData.slice(5, 7));

  if (gimimoData.slice(8, 9) === "0") {
    gimimoDiena = Number(gimimoData.slice(9, 10));
  } else gimimoDiena = Number(gimimoData.slice(8, 10));

//   console.log(gimimoMetai, gimimoMenuo, gimimoDiena);

  if (dabartiniaiMetai - gimimoMetai < 20) {
    return false; 
  } else if (dabartiniaiMetai - gimimoMetai === 20) {
    if (dabartinisMenuo < gimimoMenuo) {
      return false;
    } else if (dabartinisMenuo === gimimoMenuo) {
      if (dabartineDiena < gimimoDiena) {
        return false;
      }
    }
  }
  return true;
}

let gimimoData = prompt("Įveskite savo gimimo datą YYYY-MM-DD");

if (arPilnametis(gimimoData)) {
  console.log("Jūs esate pilnametis");
  // document.getElementById("exp").innerHTML = "SVEIKINAME, JUMS PARDUOS ALAUS!";
} else {
  console.log("Jūs esate nepilnametis");
  // document.getElementById("exp").innerHTML = "DEJA, JUMS NEPARDUOS ALAUS :(";
}


