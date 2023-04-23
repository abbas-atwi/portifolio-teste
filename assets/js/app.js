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
