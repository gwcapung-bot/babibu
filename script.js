
/* =========================================
   BABIBU OFFICIAL WEBSITE
   Interactive JavaScript
========================================= */


/* 01. MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("active");

        menuToggle.classList.toggle("open", isOpen);

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");
            menuToggle.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

    document.addEventListener("click", (event) => {

        if (
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navMenu.classList.remove("active");
            menuToggle.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

}


/* 02. ACTIVE NAVIGATION ON SCROLL
========================================= */

const sections = document.querySelectorAll("main section[id]");

function updateActiveNavigation() {

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);


/* 03. SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .schedule-card, .gallery-card, .social-card, .social-message"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});

const revealObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.12

});

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* 04. HERO TYPING EFFECT
========================================= */

const heroHighlight = document.querySelector(".hero-highlight");

if (heroHighlight) {

    const originalText = heroHighlight.textContent.trim();

    heroHighlight.textContent = "";

    let characterIndex = 0;

    function typeText() {

        if (characterIndex < originalText.length) {

            heroHighlight.textContent += originalText.charAt(characterIndex);

            characterIndex++;

            setTimeout(typeText, 75);

        }

    }

    setTimeout(typeText, 1000);

}


/* 05. CHARACTER MOUSE INTERACTION
========================================= */

const character = document.querySelector(".character-image");

if (character) {

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.addEventListener("mousemove", (event) => {

            if (window.innerWidth <= 768) return;

            const rect = hero.getBoundingClientRect();

            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;

            character.style.transform = `
                translate(${x * 12}px, ${y * 12}px)
            `;

        });

        hero.addEventListener("mouseleave", () => {

            character.style.transform = "";

        });

    }

}


/* 06. SPARKLE CLICK EFFECT
========================================= */

document.addEventListener("click", (event) => {

    const sparkle = document.createElement("span");

    sparkle.className = "click-sparkle";

    sparkle.textContent = ["✦", "✧", "♡", "⋆"][
        Math.floor(Math.random() * 4)
    ];

    sparkle.style.left = `${event.clientX}px`;
    sparkle.style.top = `${event.clientY}px`;

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 800);

});


/* 07. BACK TO TOP
========================================= */

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {

    backToTop.addEventListener("click", (event) => {

        event.preventDefault();

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


/* 08. AUTO COPYRIGHT YEAR
========================================= */

const footerCopyright = document.querySelector(".footer p");

if (footerCopyright) {

    footerCopyright.textContent =
        `© ${new Date().getFullYear()} BABIBU. All Rights Reserved.`;

}


/* 09. IMAGE FALLBACK
========================================= */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

        img.classList.add("image-error");

    });

});


/* 10. CONSOLE WELCOME
========================================= */

console.log(
    "%c✦ WELCOME TO BABIBU WORLD ✦",
    "color: #c69aff; font-size: 20px; font-weight: bold;"
);

console.log(
    "%cThanks for visiting! ♡",
    "color: #e5a1ff; font-size: 13px;"
);
