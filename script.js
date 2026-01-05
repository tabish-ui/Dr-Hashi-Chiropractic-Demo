console.log("Demo Loaded");

// HERO ANIMATION (FAST)
window.addEventListener("load", () => {
  const hero = document.querySelector(".hero-content");
  hero.style.opacity = 0;
  hero.style.transform = "translateY(20px)";
  hero.style.transition = "all 0.6s ease";
  requestAnimationFrame(() => {
    hero.style.opacity = 1;
    hero.style.transform = "translateY(0)";
  });
});

// SCROLL ANIMATIONS
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".trust-box, .card, .why li").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

// CTA BUTTON MICRO-PULSE
const ctaBtn = document.querySelector(".cta .btn");
if (ctaBtn) {
  setInterval(() => {
    ctaBtn.classList.add("pulse");
    setTimeout(() => ctaBtn.classList.remove("pulse"), 400);
  }, 4000);
}