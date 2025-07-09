document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn");
  const sobre = document.querySelector(
    ".sobre, #sobre-section, .sobre-section, #sobre"
  );
  if (btn && sobre) {
    btn.addEventListener("click", function (e) {
      if (
        btn.getAttribute("href") &&
        btn.getAttribute("href").startsWith("mailto:")
      )
        return;
      e.preventDefault();
      sobre.scrollIntoView({ behavior: "smooth", block: "start" });
      btn.classList.add("clicked");
      setTimeout(() => btn.classList.remove("clicked"), 400);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("highlight-title");
        }
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll("section h2").forEach((h2) => observer.observe(h2));

  const topbarMenuBtn = document.querySelector(".topbar-menu");
  const topbarLinks = document.querySelector(".topbar-links");
  if (topbarMenuBtn && topbarLinks) {
    topbarMenuBtn.onclick = function () {
      topbarLinks.classList.toggle("show");

      document.body.style.overflow = topbarLinks.classList.contains("show")
        ? "hidden"
        : "";
    };
    topbarLinks.querySelectorAll("a").forEach((link) => {
      link.onclick = function () {
        topbarLinks.classList.remove("show");
        document.body.style.overflow = "";
      };
    });

    document.addEventListener("click", function (e) {
      if (
        topbarLinks.classList.contains("show") &&
        !topbarLinks.contains(e.target) &&
        !topbarMenuBtn.contains(e.target)
      ) {
        topbarLinks.classList.remove("show");
        document.body.style.overflow = "";
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      topbarLinks &&
      topbarLinks.classList.contains("show")
    ) {
      topbarLinks.classList.remove("show");
      document.body.style.overflow = "";
    }
  });
});
