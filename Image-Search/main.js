
const input = document.getElementById("input");
const ImageWrapper = document.querySelector(".search-results");
const form = document.querySelector("form");
const showMore = document.getElementById("show-more");
// const home = document.querySelector('.Home')

let inputData = "";
let page = 1;

async function searchImage() {
 
  inputData = input.value;
  
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${window.env.ACCESS_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  if (page === 1) {
    ImageWrapper.innerHTML = "";
  }
  results.map((c) => {
    const res = document.createElement("div");
    res.classList.add("result");
    const image = document.createElement("img");
    image.src = c.urls.small;
    image.alt = c.alt_description;
    const link = document.createElement("a");
    link.href = c.links.html;
    link.target = "_blank";
    link.innerHTML =
      `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>
` + c.alt_description;
    res.appendChild(image);
    res.appendChild(link);
    ImageWrapper.appendChild(res);
    console.log("hii2");
  });
  // if (results.length >= 0) {
  //     home.style.display = 'inline-block';  // Ensure the home icon is displayed
  // }
  page++;
  if (page > 1) {
    showMore.style.display = "block";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  // home.style.display = 'flex'
  // if( !(input.value == '')){ searchImage();}
  searchImage();
});

showMore.addEventListener("click", () => searchImage());

// home.addEventListener('click',()=> window.location.reload()
