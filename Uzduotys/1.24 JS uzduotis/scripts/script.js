let divas = document.querySelector("div");
let button = document.querySelector("button");

button.addEventListener("click", function(event) {

    event.preventDefault();

    divas.style.backgroundColor = document.getElementById("colour").value;
    divas.style.height = `${document.getElementById("height").value}px`;
    divas.style.width = `${document.getElementById("width").value}px`;

});


// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {

//     event.preventDefault();

//     divas.style.backgroundColor = form.elements[0].value;
//     divas.style.height = `${form.elements[1].value}px`;
//     divas.style.width = `${form.elements[2].value}px`;

// });





