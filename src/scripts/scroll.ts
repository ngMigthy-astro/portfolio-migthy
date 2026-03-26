const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        const bars = entry.target.querySelectorAll<HTMLElement>(
          ".skill-bar-fill[data-level]"
        );
        bars.forEach((el) => {
          el.style.width = el.dataset.level + "%";
        });

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal, .reveal-left").forEach((el) => {
  observer.observe(el);
});

const sections = document.querySelectorAll<HTMLElement>("section[id]");
const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link[href^='#']");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((s) => navObserver.observe(s));
