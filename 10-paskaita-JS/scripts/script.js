
//iskviesti langa narsykles puslapyje su tam tikru tikslu
// alert("ahoy ahoy, sveiki visi");

console.log("ahoy ahoy, sveiki visi konsoleje");

document.write("Zuikis miega po stalu.");

document.write("Zuikis vis dar miega po stalu");


let kintamojoPavadinimas = "Kažkoks tekstas";

console.log(kintamojoPavadinimas);

kintamojoPavadinimas = "Naujas tekstas";

console.log(kintamojoPavadinimas);

const KONSTANTOS_PAVADINIMAS = "Konstantos reikšmė";

console.log(KONSTANTOS_PAVADINIMAS);

// konstanta = "Nauja konstantos reikšmė";
// console.log(konstanta); 
//erroras, negalima priskirti reikšmės deklaruotai konstantai

var senasKintamasis = "Seno kintamojo reikšmė";

console.log(senasKintamasis);

// let vardas = "Marytė";
// let amzius = 65;
// const miestas = "Alytus";

// console.log(vardas,amzius,miestas);

let tekstas = "Tekstas";
let skaicius = 45.8;
let boolean = true; // false
let nieko = null;

console.log("Aš esu " +  "Hila" + " iš " + "Kauno" + "." + " Mėgstu " + "triušius" + ".");

let vardas = "Jonas";
let miestas = "Panevėžio";
let hobis = "šunis";
let amzius = 42;

console.log("Aš esu " +  vardas + ". Man " + amzius + "." + " Aš esu " + "iš " + miestas + "." + " Mėgstu " + hobis + ".");

console.log(`Aš esu ${vardas}. Man ${amzius}. Aš esu iš ${miestas}. Mėgstu ${hobis}.`);

console.log(`Aš esu \${vardas}.`);

let x = 15;
let y = 21;

console.log(x + y);

let ijungta = true;
let isjungta = false;

console.log(ijungta, isjungta);

let kintamasisBeReiksmes = null;

console.log(kintamasisBeReiksmes);

let kodas = 1234;

console.log(String(kodas) + 3);

let butas = "5";

console.log(Number(butas) + 6);

let on = 1;  // 0 - false
console.log(Boolean(on));


let a = 9;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a ** b);
console.log(a % b);
console.log(a++); //+1  ++a, pirmiau padidini, tada panaudoji; a++, panaudoji, tada padidini
console.log(b--); //-1
console.log(a);
console.log(b);


// Priskyrimo operatoriai

let k1 = 15;
let k2 = 10;
k2 += k1; // k2 = k2 + k1 ; k2 = 25
console.log(k2);
k2 -= k1; // k2 = k2 - k1 ; k2 = 10;
console.log(k2);
k2 *= k1; // k2 * k1 ; 150 
console.log(k2);
k2 /= k1; // k2 / k1 ; 10
console.log(k2);
k2 %= k1; 
console.log(k2);


// Palyginimo operatoriai

console.log(9 == 9); // true
console.log(9 == 8); // false
console.log(9 != 8); // true
console.log(9 === 9); // lygina ir reiksmes, tipa
console.log(9 === "9"); // false
console.log(9 !== "9"); // true;
console.log(9 > 8); //true
console.log(9 >= 8); //true
console.log(9 < 8); // false
console.log(9 <= 9); // true

console.log("ABC" == "ABC"); // true
console.log("ABC" == "abc"); // false
console.log("A" == "Z"); // false


// Loginiai operatoriai

console.log(7 > 2 && 5 > 4);
console.log(7 > 2 && 3 > 4); // && ir
console.log(7 > 2 || 3 > 4); // || arba

let k3 = true;
console.log(!k3); // false


// Suzinoti reiksmes tipa 

let k4 = "tekstas";
let k5 = 52;
let k6 = false;

console.log(typeof k4);
console.log(typeof k5);
console.log(typeof k6);


console.log(19 % 3);
console.log(10 == 3);
console.log(10 !== "10");
console.log(10 === "10");
console.log(2 < "10"); // true; palyginimo operatorius suprato 10 kaip skaiciu
console.log("5" > 2); //true
console.log((false && true) || false); //false


let masyvas = ["Dramblys", "Liūtas", "Zuikis", "Šuo"]; // galima tureti ir skirtingus duomenu tipus vienam masyve
console.log(masyvas);

console.log(masyvas[2]);

masyvas[1] = "Begemotas";

console.log(masyvas);

console.log(typeof masyvas);
console.log(masyvas.length);

masyvas.pop();

console.log(masyvas);

masyvas.push("Arklys");

console.log(masyvas);

masyvas.shift();

console.log(masyvas);

masyvas.unshift("Bebras");

console.log(masyvas);

console.log(masyvas.indexOf("Arklys"));