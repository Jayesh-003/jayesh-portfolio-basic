// Typing animation text
document.addEventListener("DOMContentLoaded", () => {
  const text = "Hii, I am Jayesh Yadav";
  const typingEl = document.querySelector(".typing");
  typingEl.textContent = text;
});

// Scroll Reveal animations
ScrollReveal().reveal('.section', {
  delay: 200,
  duration: 1000,
  distance: '50px',
  origin: 'bottom',
  easing: 'ease-in-out',
  reset: true // remove if you don't want repeat on scroll back
});
