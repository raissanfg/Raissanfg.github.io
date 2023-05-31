// copyright on footer
const renderCopyright = () => {
    const today = new Date();
    const thisYear = today.getFullYear();

    const copyright = document.querySelector('#copyright')
    
    copyright.innerHTML = `&copy; Raissa Gomes ${thisYear}`

}

renderCopyright();


//skills section
document.addEventListener('DOMContentLoaded', () => {
    const renderSkillsList = () => {
        const skills = ['HTML', 'CSS', 'JavaScript', 'GIT', 'REACT']
        
        
        //DOM
        const skillsSection = document.getElementById('skills');
        const skillsList = skillsSection.querySelector('ul')
        
        for (let i = 0; i < skills.length; i++) {
            const skill = document.createElement('li');
            skill.innerHTML = skills[i];
            skill.className = 'skl';
            skillsList.appendChild(skill);
         }
        }
        
        renderSkillsList();
});


const githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/raissanfg/repos');
githubRequest.send();
githubRequest.addEventListener('load', function() {
const repositories = JSON.parse(this.response)

const projectSection = document.querySelector('projects')
const projectList = projectSection.querySelector('ul')

 for (let i=0; i < repositories.length; i++) {
    var project = document.createElement('li');
    var repositoryLink = document.createElement('a');
    repositoryLink.href = repositories[i].html_url;
    repositoryLink.innerHTML = repositories[i].name;
    projectList.appendChild(project);
    project.appendChild(repositoryLink);

 }});

function renderProjectsWithFetch() {
    fetch('http://api.github.com/users/raissanfg/repos')
    .then((res) => res.json())
    .then((data) => {

    
    const projectSection = document.querySelector('projects')
    const projectList = projectSection.querySelector('ul')

    for (let i = 0; i < data.length; i++) {
        const project = document.createElement('li');
        const repositoryLink = document.createElement('a');
        repositoryLink.href = data[i].html_url;
        repositoryLink.innerHTML = data[i].name;
        projectList.appendChild(project);
        project.appendChild(repositoryLink);
      }
    });
}
renderProjectsWithFetch();



