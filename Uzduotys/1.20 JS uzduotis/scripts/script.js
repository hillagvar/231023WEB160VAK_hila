const square = document.querySelector("div.square");
const circle = document.querySelector("div.circle");
const triangle = document.querySelector("div.triangle");
const rectangle = document.querySelector("div.rectangle");
const pentagon = document.querySelector("div.pentagon");

square.classList.remove("square");
circle.classList.remove("circle");
triangle.classList.remove("triangle");
rectangle.classList.remove("rectangle");
pentagon.classList.remove("pentagon");

square.classList.add("square");
circle.classList.add("circle");
triangle.classList.add("triangle");
rectangle.classList.add("rectangle");
pentagon.classList.add("pentagon");

square.classList.toggle("square");
square.classList.toggle("square");

circle.classList.toggle("circle");
circle.classList.toggle("circle");

triangle.classList.toggle("triangle");
triangle.classList.toggle("triangle");

rectangle.classList.toggle("rectangle");
rectangle.classList.toggle("rectangle");

pentagon.classList.toggle("pentagon");
pentagon.classList.toggle("pentagon");