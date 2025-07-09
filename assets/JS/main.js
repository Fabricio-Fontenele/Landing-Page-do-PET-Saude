document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn");
  const sobre = document.querySelector(".sobre");
  if (btn && sobre) {
    btn.addEventListener("click", function (e) {
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
    };
    topbarLinks.querySelectorAll("a").forEach((link) => {
      link.onclick = function () {
        topbarLinks.classList.remove("show");
      };
    });
  }
});
