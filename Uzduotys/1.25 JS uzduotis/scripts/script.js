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
  let jokeImageElement = document.querySelector("img");

  if (document.querySelector("p") === null) {
    jokeElement = document.createElement("p");
    jokeElement.textContent = jokeData.joke;
    document.body.append(jokeElement);
  } else {
    jokeElement.textContent = jokeData.joke;
  }

  if (document.querySelector("img") === null) {
    jokeImageElement =document.createElement("img")
    jokeImageElement.setAttribute("src", `https://icanhazdadjoke.com/j/${jokeData.id}.png`);
    document.body.append(jokeImageElement);
  } else {
    jokeImageElement.setAttribute("src", `https://icanhazdadjoke.com/j/${jokeData.id}.png`);
  }
}

jokeButton.addEventListener("click", function () {
  getJoke();
});
