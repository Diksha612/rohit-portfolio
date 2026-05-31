/* =========================
ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

```
let current = "";

sections.forEach(section => {

    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
    }

});

navLinks.forEach(link => {

    link.classList.remove("active");

    if (
        link.getAttribute("href") === "#" + current
    ) {
        link.classList.add("active");
    }

});
```

});

/* =========================
SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
".card, .timeline-item, .project-card, .skill, .stat-card, .contact-grid div"
);

function reveal() {

```
revealElements.forEach(element => {

    const windowHeight = window.innerHeight;
    const elementTop =
        element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {

        element.classList.add("show");

    }

});
```

}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/* =========================
HEADER EFFECT
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

```
if (window.scrollY > 50) {

    header.style.background =
        "rgba(7,11,20,0.98)";

} else {

    header.style.background =
        "rgba(7,11,20,0.85)";
}
```

});

/* =========================
HERO TYPING EFFECT
========================= */

const typingElement =
document.querySelector(".hero h2");

const words = [
"Project Coordinator",
"Civil Engineer",
"Infrastructure Specialist",
"Construction Professional",
"Road & Bridge Expert"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter() {

```
const currentWord =
    words[wordIndex];

if (!deleting) {

    typingElement.textContent =
        currentWord.substring(
            0,
            charIndex + 1
        );

    charIndex++;

    if (
        charIndex === currentWord.length
    ) {

        deleting = true;

        setTimeout(typeWriter, 1500);

        return;
    }

} else {

    typingElement.textContent =
        currentWord.substring(
            0,
            charIndex - 1
        );

    charIndex--;

    if (charIndex === 0) {

        deleting = false;

        wordIndex++;

        if (
            wordIndex >= words.length
        ) {
            wordIndex = 0;
        }

    }

}

setTimeout(
    typeWriter,
    deleting ? 60 : 120
);
```

}

typeWriter();

/* =========================
STATS COUNTER
========================= */

const statNumbers =
document.querySelectorAll(".stat-card h3");

let counterStarted = false;

function runCounter() {

```
if (counterStarted) return;

const stats =
    document.querySelector(".stats");

const top =
    stats.getBoundingClientRect().top;

if (top < window.innerHeight - 100) {

    counterStarted = true;

    statNumbers.forEach(counter => {

        const originalText =
            counter.innerText;

        const target =
            parseInt(
                originalText.replace(/\D/g, "")
            );

        if (!target) return;

        let count = 0;

        const increment =
            target / 50;

        const updateCounter = () => {

            count += increment;

            if (count < target) {

                counter.innerText =
                    Math.floor(count) +
                    originalText.replace(/[0-9]/g, "");

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.innerText =
                    originalText;
            }

        };

        updateCounter();

    });

}
```

}

window.addEventListener(
"scroll",
runCounter
);

window.addEventListener(
"load",
runCounter
);

/* =========================
SMOOTH FADE-IN HERO
========================= */

window.addEventListener("load", () => {

```
document.body.classList.add(
    "loaded"
);
```

});

/* =========================
BUTTON HOVER EFFECT
========================= */

const buttons =
document.querySelectorAll(
".btn-primary, .btn-secondary"
);

buttons.forEach(button => {

```
button.addEventListener(
    "mouseenter",
    () => {

        button.style.transform =
            "translateY(-3px)";
    }
);

button.addEventListener(
    "mouseleave",
    () => {

        button.style.transform =
            "translateY(0)";
    }
);
```

});

/* =========================
CONSOLE MESSAGE
========================= */

console.log(
"%cRohit Mane Portfolio Loaded Successfully",
"color:#f59e0b;font-size:16px;font-weight:bold;"
);
