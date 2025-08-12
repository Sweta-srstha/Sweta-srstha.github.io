// ===== Existing Features =====

// Typing Effect
const text = "Hello, I'm Sweta.";
const typingElement = document.getElementById("typing-text");
let index = 0;
function typeText() {
    if (typingElement && index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 150);
    }
}

window.onload = () => {
    typeText();
    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
};

// Mobile Nav Toggle
const toggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");
if (toggle) {
    toggle.addEventListener("click", () => {
        navList.classList.toggle("show");
    });
}

// Project Carousel
let projectSlideIndex = 0;
function moveProjectSlide(step) {
    const projectSlides = document.querySelectorAll(".project_carousel__image");
    if (!projectSlides.length) return;

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

// Carousel controls
const prevBtn = document.querySelector(".project_carousel__control.prev");
const nextBtn = document.querySelector(".project_carousel__control.next");
if (prevBtn) prevBtn.addEventListener("click", () => moveProjectSlide(-1));
if (nextBtn) nextBtn.addEventListener("click", () => moveProjectSlide(1));

// Flipping text
let flipIndex = 0;
const flipItems = document.querySelectorAll(".flipping-text p");
if (flipItems.length) {
    setInterval(() => {
        flipItems.forEach((item, idx) => {
            item.style.display = idx === flipIndex ? "block" : "none";
        });
        flipIndex = (flipIndex + 1) % flipItems.length;
    }, 2000);
}

// ===== GSAP Animations for All Pages =====
gsap.registerPlugin(ScrollTrigger);

// Helper for consistent animation setup
function animateFrom(selector, vars) {
    if (document.querySelector(selector)) {
        gsap.from(selector, {
            ...vars,
            scrollTrigger: {
                trigger: selector,
                start: vars.start || "top 95%",
                toggleActions: "play none none none",
            },
        });
    }
}

// ===== INDEX PAGE =====
animateFrom(".intro__content", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
});
animateFrom(".image-intro img", {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power2.out",
});

if (document.querySelectorAll(".project").length) {
    gsap.utils.toArray(".project").forEach((proj, i) => {
        gsap.from(proj.querySelector(".project__img"), {
            opacity: 0,
            x: i % 2 === 0 ? -80 : 80,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: proj,
                start: "top 95%",
                toggleActions: "play none none none",
            },
        });
        gsap.from(proj.querySelector(".project__content"), {
            opacity: 0,
            x: i % 2 === 0 ? 80 : -80,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: proj,
                start: "top 95%",
                toggleActions: "play none none none",
            },
        });
    });
}

// ===== ABOUT PAGE =====
animateFrom(".about_intro", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
});
animateFrom(".image-intro_video video", {
    opacity: 0,
    x: 60,
    duration: 1,
    ease: "power2.out",
});
animateFrom(".experience__content", {
    opacity: 0,
    x: -80,
    duration: 1,
    ease: "power2.out",
});
animateFrom(".education__content", {
    opacity: 0,
    x: 80,
    duration: 1,
    ease: "power2.out",
});

if (document.querySelectorAll(".card").length) {
    gsap.utils.toArray(".card").forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 95%",
                toggleActions: "play none none none",
            },
        });
    });
}

// ===== PROJECT PAGE =====
animateFrom(".case-study-title", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out",
});
animateFrom(".case-study-subtitle", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.1,
    ease: "power2.out",
});
animateFrom(".case-study-main-image", {
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: "power2.out",
});

if (document.querySelectorAll(".overview").length) {
    gsap.utils.toArray(".overview").forEach((section, i) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: i * 0.05,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 95%",
                toggleActions: "play none none none",
            },
        });
    });
}

if (document.querySelectorAll(".stat-block, .stat-block-1").length) {
    gsap.utils.toArray(".stat-block, .stat-block-1").forEach((block, i) => {
        gsap.from(block, {
            opacity: 0,
            y: 40,
            duration: 1,
            delay: i * 0.05,
            ease: "power2.out",
            scrollTrigger: {
                trigger: block,
                start: "top 95%",
                toggleActions: "play none none none",
            },
        });
    });
}

// ===== FOOTER (all pages) =====
animateFrom("footer", { opacity: 0, y: 40, duration: 1, ease: "power2.out" });
