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

// for caraousel
let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel__image");
    const visibleSlides = 3; // showing 3 images now
    const totalSlides = slides.length;

    slideIndex += step;

    if (slideIndex < 0) {
        slideIndex = totalSlides - visibleSlides;
    } else if (slideIndex > totalSlides - visibleSlides) {
        slideIndex = 0;
    }

    document.querySelector(".carousel__inner").style.transform = `translateX(-${
        slideIndex * (100 / visibleSlides)
    }%)`;
}

// Auto scroll
setInterval(() => moveSlide(1), 3000);

// Button controls
document
    .querySelector(".carousel__control.prev")
    .addEventListener("click", () => moveSlide(-1));
document
    .querySelector(".carousel__control.next")
    .addEventListener("click", () => moveSlide(1));
