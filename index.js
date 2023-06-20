const closeButton = document.querySelector(".cls-btn");
const modal = document.querySelector(".card-container ");
const overlay_conatiner = document.querySelector(".overlay_container");
const primary_btns = document.querySelectorAll(".btn-primary");

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hide")) {
    closeModal();
  }
});

const closeModal = () => {
  modal.classList.add("hide");
  overlay_conatiner.classList.add("hide");
};

const showModal = () => {
  overlay_conatiner.classList.remove("hide");
  modal.classList.remove("hide");
};

closeButton.addEventListener("click", () => {
  closeModal();
});
primary_btns.forEach((pb) => pb.addEventListener("click", () => showModal()));

overlay_conatiner.addEventListener("click", () => {
  closeModal();
});
