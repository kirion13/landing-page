const list = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
console.log(sections);
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
  "min-height:50px; width:100%; background:#273c75; display:flex; justify-content:center; align-items:center; border-bottom:5px solid #04aa6d; text-align:center;";
