// question 1
const button = document.querySelector("#bg");

button.onclick = function() {
    document.body.style.backgroundColor = "green";
}

// question 2
const buttonExtra = document.querySelector(".toggler");

buttonExtra.onclick = function() {
    document.querySelector(".togglee").classList.toggle("extra");
}

// question 3
const dropdown = document.querySelector("select");
const paragraphsContainer = document.querySelector(".paragraphs-container");


dropdown.onchange = function() {
    const selectedValue = this.value;

    paragraphsContainer.innerHTML = "";

    for (let i = 1; i <= selectedValue; i++) {
        paragraphsContainer.innerHTML += '<p class="content"></p>';
    }
};

//question 4




