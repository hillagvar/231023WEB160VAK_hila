let pokemonNames = [];

let headers =  {
    headers: {
        Accept: "application/json" }
 };

async function getPokemon() {
    let response = await fetch(
        "https://pokeapi.co/api/v2/pokemon", headers)
    let pokemonData = await response.json();

    let pokemonArray = pokemonData.results;

    pokemonArray.map(function(pokemon) {
        pokemonNames.push(pokemon.name);
    });

    let pokemonUrls = [];

    pokemonArray.map(function(pokemon) {
        pokemonUrls.push(pokemon.url);
    });

let pokemonWeights = [];

for (let i = 0; i < pokemonUrls.length; i++) {
    let response2 = await fetch(
        pokemonUrls[i], headers)
    let pokemonData2 = await response2.json();
    pokemonWeights.push(pokemonData2.weight);
    // console.log(pokemonData2);
};

// console.log(pokemonWeights, pokemonNames);

for (let j = 0; j < pokemonNames.length; j++) {
    let newPokemon;

    newPokemon = `vardas: ${pokemonNames[j]}, svoris: ${pokemonWeights[j]}`;

    console.log(newPokemon);
}

}

getPokemon();







