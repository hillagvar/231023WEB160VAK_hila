let sarasas = [];

for (let x = 1; sarasas.length < 10; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
        sarasas.push(x);
    }
}

console.log(sarasas);

