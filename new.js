// Sample project data - Replace with your own project details
const projects = [
    {
        title: "Project 1",
        description: "Description of Project 1.",
        link: "https://example.com/project1",
    },
    {
        title: "Project 2",
        description: "Description of Project 2.",
        link: "https://example.com/project2",
    },
    // Add more projects as needed
];

// Function to create project cards and add them to the HTML
function createProjectCards() {
    const projectCards = document.querySelector(".project-cards");

    projects.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        projectCards.appendChild(card);
    });
}

// Call the function to create project cards when the page loads
window.addEventListener("load", createProjectCards);
