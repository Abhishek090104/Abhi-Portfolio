document.addEventListener('DOMContentLoaded', () => {
    const miniProjects = [
        { title: 'Mini Project 1', description: 'Description of mini project 1' },
        { title: 'Mini Project 2', description: 'Description of mini project 2' },
        // Add more mini projects here
    ];

    const majorProjects = [
        { title: 'Major Project 1', description: 'Description of major project 1' },
        { title: 'Major Project 2', description: 'Description of major project 2' },
        // Add more major projects here
    ];

    const miniProjectList = document.getElementById('miniProjectList');
    const majorProjectList = document.getElementById('majorProjectList');

    miniProjects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        miniProjectList.appendChild(projectItem);
    });

    majorProjects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        majorProjectList.appendChild(projectItem);
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent!');
    });
});

