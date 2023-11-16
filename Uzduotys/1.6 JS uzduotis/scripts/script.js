let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

while (numMenuo <= kiekMenSpausdinti) {
    numAvys = numAvys *4;
    console.log(`Po ${numMenuo} mėnesio(-ių) bus ${numAvys} avių!`);
    numMenuo++;
}