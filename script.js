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

// question 4
const textarea = document.querySelector(".input");
const characterCount = document.querySelector(".char-count b");

textarea.onkeyup = function () {
    const length = event.target.value.length;

    characterCount.innerHTML = length;
};

// question 5
const body = document.querySelector("body");

function handleScroll () {
    const scrolledY = window.scrollY;

    if (scrolledY > 35) {
        body.classList.add("body.highlight");

    }
    else {
        body.classList.remove("body.highlight");
    }
}

window.onscroll = handleScroll;
