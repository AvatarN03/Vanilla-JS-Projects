// Array of project details
import allProjectData from "./data.js"

const Menu = document.querySelector(".menu i ");
const sidebar = document.querySelector(".sidebar");
Menu.classList.add("ri-menu-line")

Menu.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    if(Menu.classList.contains("ri-arrow-left-circle-line")){
        Menu.classList.remove("ri-arrow-left-circle-line")
        Menu.classList.add("ri-menu-line")
    }else{
        Menu.classList.remove("ri-menu-line")
        Menu.classList.add("ri-arrow-left-circle-line")
    }
    console.log("hello");
    
})





// // Get the row container
const cardContainer = document.querySelector(".card-container");
const loader = document.getElementById("loader"); // Get loader element

// Show the loader before rendering
loader.style.display = "block";

// // Function to create and append project cards
function renderProjects(allProjectData) {
    console.log(allProjectData)
    allProjectData.projects.map(project => {
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute("id", project.id);
        const imageContainer = document.createElement("div");
        imageContainer.className = "imageContainer";
        const image = document.createElement("img");
        image.src = project.image;
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

        cardContainer.appendChild(card);
    })
    loader.style.display = "none";
}




setTimeout(() => {
    renderProjects(allProjectData);
}, 1000);  
