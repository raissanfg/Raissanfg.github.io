// copyright on footer
const renderCopyright = () => {
    const today = new Date();
    const thisYear = today.getFullYear();

    const copyright = document.querySelector('#copyright');
    
    if (copyright) {
        copyright.innerHTML = `&copy; Raissa Gomes ${thisYear}`;
    }
}

// Call the function
renderCopyright();


// Skills section
document.addEventListener('DOMContentLoaded', () => {
    const renderSkillsList = () => {
        const skills = ['HTML', 'CSS', 'JavaScript', 'GIT', 'REACT']
        
        // DOM
        const skillsSection = document.getElementById('skills');

        if (skillsSection) {
            const skillsList = skillsSection.querySelector('ul');
            
            for (let i = 0; i < skills.length; i++) {
                const skill = document.createElement('li');
                skill.innerHTML = skills[i];
                skill.className = 'skl';
                skillsList.appendChild(skill);
            }
        }
    }
    
    // Call the function
    renderSkillsList();
});


// Render projects with fetch
function renderProjectsWithFetch() {
    fetch('https://api.github.com/users/raissanfg/repos')
    .then((res) => res.json())
    .then((data) => {
        const projectSection = document.getElementById('projects');

        if (projectSection) {
            const projectList = projectSection.querySelector('ul');

            for (let i = 0; i < data.length; i++) {
                const project = document.createElement('li');
                const repositoryLink = document.createElement('a');
                repositoryLink.href = data[i].html_url;
                repositoryLink.innerHTML = data[i].name;
                projectList.appendChild(project);
                project.appendChild(repositoryLink);
            }
        }
    });
}

// Call the function
renderProjectsWithFetch();
