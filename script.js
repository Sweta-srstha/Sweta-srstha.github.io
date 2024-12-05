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
