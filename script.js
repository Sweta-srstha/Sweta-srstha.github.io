const text =
    "I’m a computer science grad turned product designer, passionate about crafting clean, intuitive experiences that feel as good as they look. If it’s not thoughtful, it’s not finished.";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 70); // Adjust speed here (lower is faster)
    }
}

window.onload = typeText;

document.getElementById("current-year").textContent = new Date().getFullYear();

let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel__image");
    slideIndex += step;

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length - 1) {
        slideIndex = 0;
    }

    document.querySelector(".carousel__inner").style.transform = `translateX(-${
        slideIndex * 50
    }%)`;
}

// Automatically scroll every 3 seconds
setInterval(function () {
    moveSlide(1); // Move to the next slide
}, 3000);

// Button controls remain functional
document
    .querySelector(".carousel__control.prev")
    .addEventListener("click", function () {
        moveSlide(-1); // Move to the previous slide
    });

document
    .querySelector(".carousel__control.next")
    .addEventListener("click", function () {
        moveSlide(1); // Move to the next slide
    });
