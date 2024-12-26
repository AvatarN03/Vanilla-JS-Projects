import allProjectData from "./data.js";

const Menu = document.querySelector(".menu i");
const sidebar = document.querySelector(".sidebar");
Menu.classList.add("ri-menu-line");


function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    return arr;
}

Menu.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    if (Menu.classList.contains("ri-arrow-left-circle-line")) {
        Menu.classList.remove("ri-arrow-left-circle-line");
        Menu.classList.add("ri-menu-line");
    } else {
        Menu.classList.remove("ri-menu-line");
        Menu.classList.add("ri-arrow-left-circle-line");
    }
    console.log("Menu toggled");
});

const cardContainer = document.querySelector(".card-container");
const loader = document.getElementById("loader"); // Get loader element

// Show the loader before rendering
loader.style.display = "block";

// Optimized function to create and append project cards
function renderProjects(allProjectData) {
    console.log(allProjectData);
    const shuffledProjects = shuffleArray([...allProjectData.projects]);
    const fragment = document.createDocumentFragment(); // Create a fragment

    shuffledProjects.forEach((project) => {
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute("id", project.id);

        const imageContainer = document.createElement("div");
        imageContainer.className = "imageContainer";

        const image = document.createElement("img");
        image.src = project.image;
        image.loading = "lazy"; // Lazy load images
        imageContainer.appendChild(image);

        const content = document.createElement("div");
        content.className = "content";

        const title = document.createElement("h1");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        content.appendChild(title);
        content.appendChild(description);

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "buttonContainer";

        const button = document.createElement("button");
        const anchor = document.createElement("a");
        anchor.href = project.link;
        anchor.setAttribute("target", "_blank");
        anchor.textContent = "View Project";
        button.appendChild(anchor);
        buttonContainer.appendChild(button);

        card.appendChild(imageContainer);
        card.appendChild(content);
        card.appendChild(buttonContainer);

        fragment.appendChild(card); // Add each card to the fragment
    });

    cardContainer.appendChild(fragment); // Append the fragment once to the DOM
    loader.style.display = "none"; // Hide the loader
}

// Render projects with optimized function
setTimeout(() => {
    renderProjects(allProjectData);
}, 1000);
