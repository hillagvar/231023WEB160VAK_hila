let svoris = prompt("Įveskite savo svorį kilogramais");

if (svoris < 100) {
    console.log("Jūs sveriate mažiau negu 100kg");
} else {
    console.log(`Jūs sveriate daugiau negu 100kg - ${svoris}kg`);
}