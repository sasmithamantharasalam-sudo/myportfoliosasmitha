// ===== TYPING ANIMATION =====

const roles = [
    "CSE Student",
    "Aspiring Software Developer",
    "Technology Enthusiast",
    "Problem Solver"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

const roleElement = document.querySelector(".home h2");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    roleElement.textContent =
        currentRole.substring(0, characterIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && characterIndex === currentRole.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===== SCROLL REVEAL ANIMATION =====

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
});


// ===== DYNAMIC FOOTER YEAR =====

const footer = document.querySelector("footer p");

footer.innerHTML =
    `© ${new Date().getFullYear()} Sasmitha. All Rights Reserved.`;