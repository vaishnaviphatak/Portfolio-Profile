/* Dark Mode Toggle */
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

/* Typing Effect */
const subtitlePlaceholder = document.getElementById("hero-subtitle");
const text = "Software Developer & Student";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    subtitlePlaceholder.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

/* Scroll Reveal */
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

/* Initialize */
document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
  document.querySelectorAll(".scroll-reveal").forEach(el => observer.observe(el));
});

/* Simple Contact Form Handling */
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! (Note: This is a demo form)");
  this.reset();
});

/* Smooth Scroll for Navigation Links */
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
