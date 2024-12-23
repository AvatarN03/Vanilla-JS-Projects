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
// const rowContainer = document.querySelector(".row");

// // Function to create and append project cards
// function renderProjects(allProjectData) {
//     allProjectData.projects.map(project => {
//         // Create column div
//         const colDiv = document.createElement("div");
//         colDiv.className = "col";

//         // Create card div
//         const cardDiv = document.createElement("div");
//         cardDiv.className = "card h-100";

//         // Create card body
//         const cardBody = document.createElement("div");
//         cardBody.className = "card-body";

        
//         // Create card title
//         const cardTitle = document.createElement("h5");
//         cardTitle.className = "card-title";
//         cardTitle.textContent = project.title;

//         // Create card text
//         const cardText = document.createElement("p");
//         cardText.className = "card-text";
//         cardText.textContent = project.description;

//         // Create view button
//         const viewButton = document.createElement("a");
//         viewButton.className = "btn btn-primary";
//         viewButton.href = project.link;
//         viewButton.textContent = "View Project";

//         // Append elements to card body
//         cardBody.appendChild(cardTitle);
//         cardBody.appendChild(cardText);
//         cardBody.appendChild(viewButton);

//         // Append card body to card
//         cardDiv.appendChild(cardBody);

//         // Append card to column
//         colDiv.appendChild(cardDiv);

//         // Append column to row container
//         rowContainer.appendChild(colDiv);
//     });
// }

// // Render projects
// renderProjects(allProjectData);




// I am Trying 




// // Get the row container
const cardContainer = document.querySelector(".card-container");

// // Function to create and append project cards
function renderProjects(allProjectData) {
    console.log(allProjectData)}
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
        anchor.textContent = "View Project";
        button.appendChild(anchor);
        buttonContainer.appendChild(button);


        card.appendChild(imageContainer);
        card.appendChild(content);
        card.appendChild(buttonContainer);

        cardContainer.appendChild(card);
    })
//         // Create column div
//         const colDiv = document.createElement("div");
//         colDiv.className = "col";

//         // Create card div
//         const cardDiv = document.createElement("div");
//         cardDiv.className = "card h-100";

//         // Create card body
//         const cardBody = document.createElement("div");
//         cardBody.className = "card-body";

        
//         // Create card title
//         const cardTitle = document.createElement("h5");
//         cardTitle.className = "card-title";
//         cardTitle.textContent = project.title;

//         // Create card text
//         const cardText = document.createElement("p");
//         cardText.className = "card-text";
//         cardText.textContent = project.description;

//         // Create view button
//         const viewButton = document.createElement("a");
//         viewButton.className = "btn btn-primary";
//         viewButton.href = project.link;
//         viewButton.textContent = "View Project";

//         // Append elements to card body
//         cardBody.appendChild(cardTitle);
//         cardBody.appendChild(cardText);
//         cardBody.appendChild(viewButton);

//         // Append card body to card
//         cardDiv.appendChild(cardBody);

//         // Append card to column
//         colDiv.appendChild(cardDiv);

//         // Append column to row container
//         rowContainer.appendChild(colDiv);
//     });
// }

// // Render projects
renderProjects(allProjectData);
