const pirmasDiv = document.querySelector("div");
const antrasDiv = document.querySelector("div > div");

pirmasDiv.style.width = "200px";
pirmasDiv.style.height = "200px";
pirmasDiv.style.backgroundColor = "red";
pirmasDiv.style.position = "relative";

antrasDiv.style.width = "100px";
antrasDiv.style.height = "100px";
antrasDiv.style.backgroundColor = "blue";
antrasDiv.style.position = "absolute";
antrasDiv.style.top = "50%";
antrasDiv.style.left = "50%";
antrasDiv.style.transform = "translate(-50%, -50%)"

