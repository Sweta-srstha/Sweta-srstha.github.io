const text = "Hello, I'm Sweta.";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 150); // Adjust speed here (lower is faster)
    }
}

const toggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

toggle.addEventListener("click", () => {
    navList.classList.toggle("show");
});

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
