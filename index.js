// Utiliza la API de GitHub para cargar proyectos
const projectsUrl = 'https://api.github.com/users/LuisJimenez35/repos';

fetch(projectsUrl)
    .then(response => response.json())
    .then(projects => {
        const projectList = document.getElementById('project-list');
        const projectsToExclude = ['Personal-Portafolio', 'LuisJimenez35', 'System-PCGamer']; // Agrega los nombres de los proyectos que no deseas mostrar aquí

        projects.forEach(project => {
            // Verifica si el nombre del proyecto no está en la lista de exclusiones
            if (!projectsToExclude.includes(project.name)) {
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                const descriptionCell = document.createElement('td');
                const githubLinkCell = document.createElement('td'); // Nueva celda para el enlace a GitHub

                nameCell.textContent = project.name;
                descriptionCell.textContent = project.description || 'Sin descripción disponible';

                // Crear el enlace a GitHub
                const githubLink = document.createElement('a');
                githubLink.textContent = 'Ver en GitHub'; // Texto del botón o enlace
                githubLink.href = project.html_url; // URL de GitHub del proyecto
                githubLink.target = '_blank'; // Abre el enlace en una nueva pestaña

                // Agregar el enlace a GitHub a la celda correspondiente
                githubLinkCell.appendChild(githubLink);

                row.appendChild(nameCell);
                row.appendChild(descriptionCell);
                row.appendChild(githubLinkCell); // Agregar la celda del enlace a GitHub
                projectList.appendChild(row);
            }
        });
    })
    .catch(error => {
        console.error('Error al cargar proyectos desde GitHub:', error);
    });

