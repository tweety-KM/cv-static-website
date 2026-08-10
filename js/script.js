(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(pointer: coarse)").matches;

  /* ---------------------------------------------------------
     Ambient cursor-follow orb
     Lerp toward the pointer each frame for a soft, floaty feel.
  --------------------------------------------------------- */
  const orb = document.getElementById("orb");

  if (orb && !reduceMotion && !isTouch) {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    window.addEventListener("mousemove", (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    function animateOrb() {
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;
      orb.style.transform = `translate3d(${currentX - 310}px, ${currentY - 310}px, 0)`;
      requestAnimationFrame(animateOrb);
    }
    requestAnimationFrame(animateOrb);
  }

  /* ---------------------------------------------------------
     Magnetic hover for buttons, links, nav pills
  --------------------------------------------------------- */
  if (!reduceMotion && !isTouch) {
    document.querySelectorAll(".magnetic").forEach((el) => {
      const strength = 14;

      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        const mx = (relX / rect.width) * strength;
        const my = (relY / rect.height) * strength;
        el.style.setProperty("--mx", `${mx}px`);
        el.style.setProperty("--my", `${my}px`);
      });

      el.addEventListener("mouseleave", () => {
        el.style.setProperty("--mx", "0px");
        el.style.setProperty("--my", "0px");
      });
    });
  }

  /* ---------------------------------------------------------
     Scroll-spy: highlight the active nav link
  --------------------------------------------------------- */
  const sections = document.querySelectorAll(".block[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    const linkFor = (id) =>
      document.querySelector(`.nav-link[data-nav="${id}"]`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = linkFor(entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }
})();
