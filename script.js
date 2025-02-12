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
    "Believe you can and you're halfway there.",
    "Keep pushing forward.",
    "Every moment is a fresh beginning.",
    "Do what you can, with what you have, where you are."
];
function showRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
showRandomQuote();

// Dark mode toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});