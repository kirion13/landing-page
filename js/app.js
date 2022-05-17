const list = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const conter = document.querySelectorAll(".landing__container");
console.log(conter);
const markup = [...sections]
  .map(
    (item) =>
      `<li><a  data-sec="${item.id}" class="menu__link">${item.dataset.nav}</a></li>`
  )
  .join("");
list.insertAdjacentHTML("afterbegin", markup);
list.addEventListener("click", (e) => {
  if (!e.target.closest(".menu__link")) return;
  document
    .getElementById(e.target.dataset.sec)
    .scrollIntoView({ behavior: "smooth" });
});
list.style.cssText =
  " min-height:50px; width:100%; background:#273c75; display:flex; justify-content:center; align-items:center; border-bottom:5px solid #04aa6d; text-align:center;";
///
const active = document.querySelectorAll(".menu__link");
window.addEventListener("scroll", function () {
  sections.forEach((section, i) => {
    if (
      section.getBoundingClientRect().top <= 27 &&
      section.getBoundingClientRect().bottom >= 27
    ) {
      section.classList.add("your-active-class");
      active[i].classList.add("active");
    } else {
      section.classList.remove("your-active-class");
      active[i].classList.remove("active");
    }
  });
});
