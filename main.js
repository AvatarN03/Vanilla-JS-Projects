// Array of project details
import allProjectData from "./data.js"

// Get the row container
const rowContainer = document.querySelector(".row");

// Function to create and append project cards
function renderProjects(allProjectData) {
    allProjectData.projects.map(project => {
        // Create column div
        const colDiv = document.createElement("div");
        colDiv.className = "col";

        // Create card div
        const cardDiv = document.createElement("div");
        cardDiv.className = "card h-100";

        // Create card body
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        
        // Create card title
        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = project.title;

        // Create card text
        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.textContent = project.description;

        // Create view button
        const viewButton = document.createElement("a");
        viewButton.className = "btn btn-primary";
        viewButton.href = project.link;
        viewButton.textContent = "View Project";

        // Append elements to card body
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(viewButton);

        // Append card body to card
        cardDiv.appendChild(cardBody);

        // Append card to column
        colDiv.appendChild(cardDiv);

        // Append column to row container
        rowContainer.appendChild(colDiv);
    });
}

// Render projects
renderProjects(allProjectData);
