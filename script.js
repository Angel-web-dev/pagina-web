// Año automático
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar cambia al hacer scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// Animación Reveal (cuando aparece en pantalla)
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((el) => revealObserver.observe(el));

// Formulario demo (sin backend)
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.innerHTML = `<span class="text-success fw-semibold">✅ Mensaje enviado (demo). Aquí puedes conectarlo a tu backend.</span>`;
  form.reset();

  setTimeout(() => {
    msg.innerHTML = "";
  }, 4500);
});
