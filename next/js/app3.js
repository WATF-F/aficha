let rect = document.querySelector(".menu_rect");
let menu = document.querySelector(".menu");
let buttonul = document.querySelector(".button");

rect.onclick = () => {
  rect.classList.toggle("active");
  menu.classList.toggle("active");
  buttonul.classList.toggle("active");
};
let main = document.querySelectorAll(".image_item");
main.forEach((el) => {
  el.onclick = () => {
    el.classList.toggle("active");
  };
});
