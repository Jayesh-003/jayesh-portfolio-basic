// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
  })
})

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle && navToggle.addEventListener('click', ()=>{
  if(navLinks.style.display === 'flex'){
    navLinks.style.display = '';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.gap = '0.5rem';
    navLinks.style.background = 'rgba(6,8,15,0.9)';
    navLinks.style.padding = '0.75rem';
    navLinks.style.position = 'absolute';
    navLinks.style.right = '1rem';
    navLinks.style.top = '56px';
    navLinks.style.borderRadius = '8px';
  }
})

// tiny header shrink on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if(window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

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
  reset: true // if you want animation to repeat on scroll back
});
