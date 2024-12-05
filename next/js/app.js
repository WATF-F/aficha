let menuToggle = document.querySelector(".buttoner");
menuToggle.onclick = () => {
  if (yesn.classList.contains("active")) {
    menuToggle.classList.toggle("active");
    yesn.classList.toggle("active");
    yu.forEach((imago) => {
      imago.classList.toggle("active");
    });
  }
  if (menuToggle.classList.contains("active")) {
    return 0;
  }
};
let yu = document.querySelectorAll(".imgt");
let yesn = document.querySelector(".button2");
yesn.onclick = () => {
  if (menuToggle.classList.contains("active")) {
    yesn.classList.toggle("active");
    menuToggle.classList.toggle("active");
    yu.forEach((imago) => {
      imago.classList.toggle("active");
    });
  }
  if (yesn.classList.contains("active")) {
    return 0;
  }
};
let rect = document.querySelector(".menu_rect");
let menu = document.querySelector(".menu");
let buttonul = document.querySelector(".button");

rect.onclick = () => {
  rect.classList.toggle("active");
  menu.classList.toggle("active");
  buttonul.classList.toggle("active");
};

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let block = document.querySelector(".kitchen_block_menu");
let table = document.querySelector(".kitchen_table_menu");
let all_menu = document.querySelector(".all_menu");
let bancket = document.querySelector(".bancket");
let column_menu = document.querySelectorAll(".menu_col");
let kitchen = document.querySelector(".kitchen");
prev.onclick = () => {
  bancket.classList.add("active");
  prev.classList.remove("down");
  next.classList.remove("down");
  all_menu.classList.remove("down");
  kitchen.classList.add("active");
  if (!table.classList.contains("left")) {
    table.classList.toggle("left");
    table.classList.remove("right");
    prev.classList.toggle("not");
    next.classList.remove("not");
  }
  if (table.classList.contains("left")) {
    return 0;
  }
  if (table.classList.contains("right")) {
    table.classList.toggle("left");
    table.classList.remove("right");
  }
};
next.onclick = () => {
  bancket.classList.add("active");
  prev.classList.remove("down");
  next.classList.remove("down");
  all_menu.classList.remove("down");
  kitchen.classList.add("active");
  if (!table.classList.contains("right")) {
    table.classList.toggle("right");
    table.classList.remove("left");
    next.classList.toggle("not");
    prev.classList.remove("not");
  }
  if (table.classList.contains("right")) {
    return 0;
  }
  if (table.classList.contains("right")) {
    table.classList.toggle("left");
    table.classList.remove("right");
  }
};
all_menu.onclick = () => {
  bancket.classList.remove("active");
  kitchen.classList.remove("active");

  if (table.classList.contains("left")) {
    table.classList.remove("left");
  }
  if (table.classList.contains("right")) {
    table.classList.remove("right");
  }
  if (prev.classList.contains("not")) {
    prev.classList.remove("not");
  }
  if (next.classList.contains("not")) {
    next.classList.remove("not");
  }
  if (table.classList.contains("left") || table.classList.contains("right")) {
    prev.classList.remove("down");
    next.classList.remove("down");
    all_menu.classList.remove("down");
  } else {
    prev.classList.add("down");
    next.classList.add("down");
    all_menu.classList.add("down");
  }
};
let arrow = document.querySelectorAll(".arrow");
let head_i = document.querySelectorAll(".head_item");
let accord = document.querySelectorAll(".list_item");
head_i.forEach((el) => {
  el.onclick = () => {
    el.classList.toggle("active");
    accord.forEach((ell) => {
      if (ell.contains(el)) {
        ell.classList.toggle("active");
      }
    });
    arrow.forEach((elll) => {
      if (el.contains(elll)) {
        elll.classList.toggle("active");
      }
    });
  };
});
