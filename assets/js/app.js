const phrases = ["Laravel", "NodeJS", "API Integration", "Full-Stack Development", "Payment Integration"];
const typedEl = document.getElementById("typed");
let i = 0, j = 0, forward = true;

function typeStep() {
    let text = phrases[i];

    if (forward) {
        j++;
        if (j === text.length) {
            forward = false;
            setTimeout(typeStep, 800);
            return;
        }
    } else {
        j--;
        if (j === 0) {
            forward = true;
            i = (i + 1) % phrases.length;
        }
    }

    typedEl.textContent = text.slice(0, j);
    setTimeout(typeStep, forward ? 80 : 40);
}
typeStep();

/* Mobile toggle */
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");
const mobileBg = document.getElementById("mobileBg");

burger.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
    mobileBg.classList.toggle("hidden");
});

mobileBg.addEventListener("click", () => {
    mobileNav.classList.add("hidden");
    mobileBg.classList.add("hidden");
});

/* Contact Form Alert */
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
    // remove if backend added
    alert("Message sent successfully!");
});

/* Year */
document.getElementById("year").textContent = new Date().getFullYear();