"use strict";
const modals = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);
const closeModal = function () {
  modals.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  console.log("Button clicked");
  modals.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape") {
    if (!modals.classList.contains("hidden")) {
      closeModal();
    }
  }
});

// if (e.key === "Escape" && !modals.classList.contains("hidden")) {
//   closeModal();
// }
