// Update the clock every second
function updateClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = "Current Time: " + timeString;
}
setInterval(updateClock, 1000);
updateClock(); // Run once at the start

// Random quote generator
const quotes = [
    "I know you love me.",
    "I love you too.",
    "You are the love of my life.",
    "We can do better for each other."
];
function showRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
showRandomQuote();

// Dark mode toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});const slides = document.querySelector(".slides");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

let scrollAmount = 0;
const scrollStep = 320; // Adjust for image size

rightBtn.addEventListener("click", () => {
    scrollAmount += scrollStep;
    slides.style.transform = translateX(-${scrollAmount}px);
});

leftBtn.addEventListener("click", () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0;
    slides.style.transform = translateX(-${scrollAmount}px);
});