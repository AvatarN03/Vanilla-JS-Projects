const searchBar = document.querySelector(".search-bar-container");
const magnifer = document.querySelector(".magnifer");
const input = document.querySelector("input");

magnifer.addEventListener("click", (e) => {
  searchBar.classList.toggle("active");

  input.focus();
});
