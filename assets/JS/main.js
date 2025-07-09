document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn");
  const sobre = document.querySelector(".sobre");
  if (btn && sobre) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      sobre.scrollIntoView({ behavior: "smooth" });
      btn.classList.add("clicked");
      setTimeout(() => btn.classList.remove("clicked"), 400);
    });
  }

  const welcome = document.createElement("div");
  welcome.innerText = "Bem-vindo(a) ao PET-Saúde!";
  welcome.style.position = "fixed";
  welcome.style.top = "20px";
  welcome.style.left = "50%";
  welcome.style.transform = "translateX(-50%)";
  welcome.style.background = "#2196f3";
  welcome.style.color = "#fff";
  welcome.style.padding = "0.7rem 1.6rem";
  welcome.style.borderRadius = "20px";
  welcome.style.boxShadow = "0 2px 12px rgba(33,150,243,0.12)";
  welcome.style.fontWeight = "bold";
  welcome.style.zIndex = "999";
  welcome.style.fontFamily = "inherit";
  document.body.appendChild(welcome);
  setTimeout(() => {
    welcome.style.opacity = "0";
    setTimeout(() => welcome.remove(), 600);
  }, 2000);

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
});
