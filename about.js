// =========================
// FLIP CARDS (ABOUT SECTION)
// =========================

document.querySelectorAll(".about-card").forEach(card => {
    const backArrow = card.querySelector(".back-arrow");
    const closeBtn = card.querySelector(".flip-back .outline-btn");

    // Flip open
    card.addEventListener("click", () => {
        card.classList.add("active");
    });

    // Flip closed (arrow)
    if (backArrow) {
        backArrow.addEventListener("click", (e) => {
            e.stopPropagation();
            card.classList.remove("active");
        });
    }

    // Flip closed (button)
    if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            card.classList.remove("active");
        });
    }
});


// =========================
// CEO FLIP (CEO RECTANGLE FLIPS IN PLACE)
// =========================

// The CEO rectangle itself is the flip card
const ceoCard = document.querySelector(".ceo-card");
const ceoLearnBtn = document.querySelector(".ceo-learn-btn");
const ceoBack = document.querySelector(".ceo-back");
const ceoClose = document.querySelector(".ceo-close");

// Flip open
ceoLearnBtn.addEventListener("click", () => {
    ceoCard.classList.add("active");
});

// Flip closed (arrow)
ceoBack.addEventListener("click", (e) => {
    e.stopPropagation();
    ceoCard.classList.remove("active");
});

// Flip closed (button)
ceoClose.addEventListener("click", (e) => {
    e.stopPropagation();
    ceoCard.classList.remove("active");
});


// =========================
// TESTIMONIAL CAROUSEL
// =========================

let currentIndex = 0;
const testimonialCards = document.querySelectorAll(".testimonial-card");

function showCard(index) {
    testimonialCards.forEach(card => card.classList.remove("active"));
    testimonialCards[index].classList.add("active");
}

document.getElementById("next").onclick = () => {
    currentIndex = (currentIndex + 1) % testimonialCards.length;
    showCard(currentIndex);
};

document.getElementById("prev").onclick = () => {
    currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
    showCard(currentIndex);
};
