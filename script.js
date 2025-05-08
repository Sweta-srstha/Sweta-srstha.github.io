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

// for project carousel images
// Second Carousel (The one you added)
let projectSlideIndex = 0;

function moveProjectSlide(step) {
    const projectSlides = document.querySelectorAll(".project_carousel__image");
    const visibleProjectSlides = 3; // showing 3 images now
    const totalProjectSlides = projectSlides.length;

    projectSlideIndex += step;

    if (projectSlideIndex < 0) {
        projectSlideIndex = totalProjectSlides - visibleProjectSlides;
    } else if (projectSlideIndex > totalProjectSlides - visibleProjectSlides) {
        projectSlideIndex = 0;
    }

    document.querySelector(
        ".project_carousel__inner"
    ).style.transform = `translateX(-${
        projectSlideIndex * (100 / visibleProjectSlides)
    }%)`;
}

// Auto scroll for second carousel (every 3 seconds)
setInterval(() => moveProjectSlide(1), 3000);

// Button controls for the second carousel
document
    .querySelector(".project_carousel__control.prev")
    .addEventListener("click", () => moveProjectSlide(-1));
document
    .querySelector(".project_carousel__control.next")
    .addEventListener("click", () => moveProjectSlide(1));

// for caraousel
let sheLeadsSlideIndex = 0;

function moveSheLeadSlide(step) {
    const slides = document.querySelectorAll(".carousel__image");
    const visibleSlides = 2; // showing 3 images now
    const totalSlides = slides.length;

    sheLeadsSlideIndex += step;

    if (sheLeadsSlideIndex < 0) {
        sheLeadsSlideIndex = totalSlides - visibleSlides;
    } else if (sheLeadsSlideIndex > totalSlides - visibleSlides) {
        sheLeadsSlideIndex = 0;
    }

    document.querySelector(".carousel__inner").style.transform = `translateX(-${
        slideIndex * (100 / visibleSlides)
    }%)`;
}

// Auto scroll
setInterval(() => moveSheLeadSlide(1), 3000);

// Button controls
document
    .querySelector(".carousel__control.prev")
    .addEventListener("click", () => moveSheLeadSlide(-1));
document
    .querySelector(".carousel__control.next")
    .addEventListener("click", () => moveSheLeadSlide(1));
