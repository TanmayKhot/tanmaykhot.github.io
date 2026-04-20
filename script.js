// Nav scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') root.classList.add('light');

themeToggle.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--text)'
            : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);
sections.forEach(s => sectionObserver.observe(s));
