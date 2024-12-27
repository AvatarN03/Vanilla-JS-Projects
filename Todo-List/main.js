const form = document.querySelector("form");
const input = document.querySelector("input");
const checkList = document.querySelector(".check_list");
const uncheckList = document.querySelector(".uncheck_list");

form.addEventListener("submit", (e) => {
  e.preventDefault();  
  if (input.value.trim() !== "") {
    addTask(input.value);  
    input.value = "";  
    saveToLocal();  
  }
});

function addTask(taskText) {
  const li = document.createElement("li");
  li.classList.add("list");
  li.innerHTML = `${taskText} <span><i class="fa-solid fa-trash"></i></span>`;
  uncheckList.appendChild(li);

  addEventListenersToLi(li);
}

function addEventListenersToLi(li) {
  li.addEventListener("click", (e) => {
    if (e.target.tagName !== "SPAN") {
      checkList.appendChild(li);
      saveToLocal();  
    }
  });
// using the stop-progagtion to flow to parent what for only child 
  li.querySelector("span").addEventListener("click", (e) => {
    e.stopPropagation();  
    li.remove(); 
    saveToLocal(); 
  });
}

function saveToLocal() {
  localStorage.setItem("checked", checkList.innerHTML);
  localStorage.setItem("uncheck", uncheckList.innerHTML);
}
function loadFromLocal() {
  checkList.innerHTML = localStorage.getItem("checked") || "";
  uncheckList.innerHTML = localStorage.getItem("uncheck") || "";

  // REBINDING THE LI WITH EVENT LISTENSERS
  const allItems = document.querySelectorAll(".list");
  allItems.forEach((li) => {
    addEventListenersToLi(li);
  });
}

loadFromLocal();
