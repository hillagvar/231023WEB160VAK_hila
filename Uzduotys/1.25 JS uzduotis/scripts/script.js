let jokeButton = document.getElementById("joke-button");

let headers = {
  headers: {
    Accept: "application/json",
  },
};

async function getJoke() {
  let response = await fetch("https://icanhazdadjoke.com/", headers);
  let jokeData = await response.json();

  let jokeElement = document.querySelector("p");

  if (document.querySelector("p") === null) {
    jokeElement = document.createElement("p");
    jokeElement.textContent = jokeData.joke;
    document.body.append(jokeElement);
  } else {
    jokeElement.textContent = jokeData.joke;
  }
}

jokeButton.addEventListener("click", function () {
  getJoke();
});
