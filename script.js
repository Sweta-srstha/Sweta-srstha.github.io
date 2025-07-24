// 1. Typing Effect (already exists, retained)
const text = "Hello, I'm Sweta.";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 150);
    }
}

window.onload = () => {
    typeText();
    document.getElementById("current-year").textContent =
        new Date().getFullYear();
    revealOnScroll(); // trigger scroll animation on load
};

// 2. Mobile Nav Toggle
const toggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

toggle.addEventListener("click", () => {
    navList.classList.toggle("show");
});

// 3. Project Carousel (existing)
let projectSlideIndex = 0;
function moveProjectSlide(step) {
    const projectSlides = document.querySelectorAll(".project_carousel__image");
    const visibleProjectSlides = 3;
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

setInterval(() => moveProjectSlide(1), 3000);

document
    .querySelector(".project_carousel__control.prev")
    .addEventListener("click", () => moveProjectSlide(-1));
document
    .querySelector(".project_carousel__control.next")
    .addEventListener("click", () => moveProjectSlide(1));

// 5. Flipping text animation
let flipIndex = 0;
const flipItems = document.querySelectorAll(".flipping-text p");
setInterval(() => {
    flipItems.forEach((item, idx) => {
        item.style.display = idx === flipIndex ? "block" : "none";
    });
    flipIndex = (flipIndex + 1) % flipItems.length;
}, 2000);
