const closeButton = document.querySelector(".cls-btn");
const modal = document.querySelector(".card-container ");
const overlay_conatiner = document.querySelector(".overlay_container");
const primary_btns = document.querySelectorAll(".btn-primary");

closeButton.addEventListener("click", () => {
  modal.classList.add("hide");
  overlay_conatiner.classList.toggle("hide");
});
primary_btns.forEach((pb) =>
  pb.addEventListener("click", () => {
    overlay_conatiner.classList.toggle("hide");
    modal.classList.toggle("hide");
  })
);

overlay_conatiner.addEventListener("click", () => {
  modal.classList.toggle("hide");
  overlay_conatiner.classList.toggle("hide");
});
