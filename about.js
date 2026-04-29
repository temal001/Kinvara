const cards = document.querySelectorAll(".testimonial-card");
let i = 0;

document.getElementById("next").onclick = () => {
    cards[i].classList.remove("active");
    i = (i + 1) % cards.length;
    cards[i].classList.add("active");
};

document.getElementById("prev").onclick = () => {
    cards[i].classList.remove("active");
    i = (i - 1 + cards.length) % cards.length;
    cards[i].classList.add("active");
};
