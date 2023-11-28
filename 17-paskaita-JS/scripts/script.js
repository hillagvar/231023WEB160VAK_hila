let image = document.getElementById("besikeiciantis-paveikslelis");

let button = document.getElementById("paveikslelio-mygtukas");

image.addEventListener("click", function () {
  let randomId = Math.floor(Math.random() * 1000);

//   console.log(randomId);

  image.setAttribute("src", `https://picsum.photos/id/${randomId}/500/300`);

//   console.log("paveikslelis pasikeite");
});


let myForm = document.getElementById("my-form");
let greetingElement = document.getElementById("greeting");

myForm.addEventListener("submit", function(event) {

    //nutraukia iprasta formos pateikimo eiga, t.y. perkrauti puslapi, kuriame randames
    event.preventDefault();
    
    console.log(event);
    console.log("Pateikta forma");

    greetingElement.textContent = `Welcome back, ${myForm.elements.firstName.value}`;
    //galima issitraukti nebutinai per firstName, bet ir per indexa - elements[0];

});


let headers =  {
    headers: {
        Accept: "application/json" }
 };

async function getJoke() {
    let response = await fetch(
        "https://icanhazdadjoke.com/", headers)
    let jokeData = await response.json();

    greetingElement.textContent = jokeData.joke;
}

getJoke();






