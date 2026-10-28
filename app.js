
let userInput = document.getElementById("myInput");
let button = document.getElementById("btn");
let ul = document.getElementById("list");

button.addEventListener("click", function () {

    let li = document.createElement("li");

    li.textContent = userInput.value;

let icon = document.createElement("i");
icon.className = "fa-solid fa-xmark";

icon.onclick = function () {
    li.remove();

};

li.appendChild(icon);
ul.appendChild(li);


    userInput.value = "";

});
