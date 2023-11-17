function dienaPagalSkaiciu(skaicius) {
  let dienos = ["Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis", "Sekmadienis"];

  return dienos[skaicius - 1];

}

console.log(dienaPagalSkaiciu(7));



// function duokManSavaitesDienaPagalSkaiciu(skaicius) {
//   let savaitesDiena;

//   switch (skaicius) {
//     case 7:
//       savaitesDiena = "Sekmadienis";
//       break;
//     case 6:
//       savaitesDiena = "Šeštadienis";
//       break;
//     case 5:
//       savaitesDiena = "Penktadienis";
//       break;
//     case 4:
//       savaitesDiena = "Ketvirtadienis";
//       break;
//     case 3:
//       savaitesDiena = "Trečiadienis";
//       break;
//     case 2:
//       savaitesDiena = "Antradienis";
//       break;
//     case 1:
//       savaitesDiena = "Pirmadienis";
//   }
//   return savaitesDiena;
// }

// console.log(duokManSavaitesDienaPagalSkaiciu(1));