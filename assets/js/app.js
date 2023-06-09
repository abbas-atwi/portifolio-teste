const items = document.querySelectorAll(".item");
const div = document.querySelectorAll(".item div");
function activeHover() {
  div.forEach((item) => {
    item.classList.remove("item-hover");
  });
  this.children[0].innerText = "Bem vindo";
  console.log(this.children[0].classList.toggle("item-hover"));
}

items.forEach((item) => {
  item.addEventListener("click", activeHover);
});

const menu = document.querySelector(".menubuerguer");
const menuNav = document.querySelector(".menu nav");

menu.addEventListener("click", () => {
  menuNav.classList.toggle("activeMenu");
});

// scroll animacao

const sectionInfo = document.querySelector(".section-container-info");
const sectionItem = document.querySelectorAll(".section-container-info .item");
window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight * 0.6;
  const sectionInfoTop = sectionInfo.getBoundingClientRect().top - windowHeight;
  function itemActive() {
    sectionItem.forEach((item) => {
      item.classList.add("active");
    });
  }
  if (sectionInfoTop < 0) {
    console.log("a");
    itemActive();
  }
});

const menus = document.querySelectorAll(".menu a[href^='#']");
const metade = window.innerHeight * 0.6;
menus.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const href = item.getAttribute("href");
    const section = document.querySelector(href);

    const sectiontop = section.getBoundingClientRect().top;

    console.log(section);

    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

const pointer = document.querySelectorAll(".pointers .pointer");
const sliders = document.querySelectorAll(".slide");
const slidersSave = sliders[0];

function activePointer(index) {
  pointer.forEach((item) => {
    item.classList.remove("active");
  });

  pointer[index].classList.toggle("active");
  slidersSave.innerHTML = sliders[index].innerHTML;
}

pointer.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    // e.preventDefault();
    activePointer(index);
  });
});

// sliders

console.log(sliders[1]);
console.log(pointer);

console.log(menus);
