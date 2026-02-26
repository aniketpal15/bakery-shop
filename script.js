// ========== MOBILE NAV TOGGLE ==========
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });

  navLinks.forEach((link) =>
    link.addEventListener("click", () => navMenu.classList.remove("show-menu"))
  );
}

// ========== ACTIVE LINK ON SCROLL ==========
const sections = document.querySelectorAll("section[id]");

function setActiveLink() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80;
    const sectionId = current.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link && link.classList.add("active-link");
    } else {
      link && link.classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", setActiveLink);

// ========== SCROLL REVEAL (simple custom) ==========
const revealEls = document.querySelectorAll(
  ".section, .about, .locations-grid, .gallery-grid, .menu-section, .contact"
);

function handleReveal() {
  const triggerBottom = window.innerHeight * 0.85;

  revealEls.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
      el.classList.add("reveal");
    }
  });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

// ========== CONTACT FORM (DEMO ONLY) ==========
const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formNote.textContent =
      "Thank you for reaching out! Our team will get back to you on WhatsApp shortly.";
    contactForm.reset();
  });
}
