// const input = document.getElementsByTagName("input")[0];
const input = document.querySelector("input");

const Body = document.querySelector("body");

console.log(input.checked);

function local(){
    if (localStorage.getItem("toggle") === "true") {
        input.checked = true;
      }
      else{
        input.checked = false
      }
}
local();

update();

//I learned the that the addEvent has the "input" attribute too...
input.addEventListener("input", () => {
    localStorage.getItem("toggle") === "true" ? localStorage.removeItem("toggle") : localStorage.setItem("toggle", "true");
    update();
});

function update() {
  if (input.checked === true) {
    setTimeout(() => {
      Body.style.background = "black";
      Body.style.color = "white";
    }, 200);
  } else {
    setTimeout(() => {
      Body.style.background = "white";
      Body.style.color = "black";
    }, 200);
  }
}
