/* =========================
   PAGE LOADER
========================= */
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

/* =========================
   SCROLL REVEAL (BEST PRACTICE)
========================= */
document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
            rootMargin: "0px 0px -100px 0px"
        }
    );

    scrollElements.forEach(el => observer.observe(el));
});

/* =========================
   LIGHTBOX
========================= */
function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");

    if (!lightbox || !img) return;

    img.src = src;
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox) return;

    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
}

/* Close with ESC */
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
});

/* Prevent image click closing */
document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("lightbox-img");
    if (img) {
        img.addEventListener("click", e => e.stopPropagation());
    }
});

/* =========================
   SHARINGAN HOVER SOUND (SAFE)
========================= */
document.addEventListener("DOMContentLoaded", () => {
    const sound = document.getElementById("hoverSound");
    if (!sound) return;

    document.querySelectorAll("a, .gallery-item").forEach(el => {
        el.addEventListener("mouseenter", () => {
            sound.currentTime = 0;
            sound.play().catch(() => {});
        });
    });
});
