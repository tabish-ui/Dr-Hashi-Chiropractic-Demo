// ===== BASIC LOAD CHECK =====
console.log("Dr Hashi Chiropractic Demo Loaded");

// ===== FADE & SLIDE ON LOAD (HERO) =====
window.addEventListener("load", () => {
  const hero = document.querySelector(".hero-content");
  hero.style.opacity = 0;
  hero.style.transform = "translateY(30px)";

  setTimeout(() => {
    hero.style.transition = "all 1s ease";
    hero.style.opacity = 1;
    hero.style.transform = "translateY(0)";
  }, 200);
});

// ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  { threshold: 0.2 }
);

// ===== TRUST BOXES ANIMATION =====
document.querySelectorAll(".trust-box").forEach((box, index) => {
  box.style.opacity = 0;
  box.style.transform = "translateY(20px)";
  box.style.transition = `all 0.6s ease ${index * 0.15}s`;
  observer.observe(box);
});

// ===== SERVICE CARDS ANIMATION =====
document.querySelectorAll(".card").forEach((card, index) => {
  card.style.opacity = 0;
  card.style.transform = "scale(0.95)";
  card.style.transition = `all 0.6s ease ${index * 0.12}s`;
  observer.observe(card);
});

// ===== CTA BUTTON PULSE EFFECT =====
const ctaBtn = document.querySelector(".cta .btn");

if (ctaBtn) {
  setInterval(() => {
    ctaBtn.classList.add("pulse");
    setTimeout(() => {
      ctaBtn.classList.remove("pulse");
    }, 600);
  }, 3500);
}

// ===== APPLY ANIMATION CLASS =====
document.addEventListener("scroll", () => {
  document.querySelectorAll(".animate").forEach((el) => {
    el.style.opacity = 1;
    el.style.transform = "translateY(0) scale(1)";
  });
});