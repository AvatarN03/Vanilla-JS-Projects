const accessKey = "wgdDprJp50WHK5H9l7oOjulZtH-F6iwHJRRHf4PGesE";
const input = document.getElementById("input");
const ImageWrapper = document.querySelector(".search-results");
const form = document.querySelector("form");
const showMore = document.getElementById("show-more");
// const home = document.querySelector('.Home')

let inputData = "";
let page = 1;


async function searchImage() {
    console.log("hii");
    inputData = input.value;
    console.log(inputData);
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

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
        link.textContent = c.alt_description;
        res.appendChild(image);
        res.appendChild(link);
        ImageWrapper.appendChild(res)
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
    page = 1
    // home.style.display = 'flex'
    // if( !(input.value == '')){ searchImage();}
    searchImage();
});

showMore.addEventListener("click", () => searchImage());

// home.addEventListener('click',()=> window.location.reload()
