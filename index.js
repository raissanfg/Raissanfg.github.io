// copyright on footer
const renderCopyright = () => {
    const today = new Date();
    const thisYear = today.getFullYear();

    const copyright = document.querySelector('#copyright')
    
    copyright.innerHTML = `&copy; Raissa Gomes ${thisYear}`

}

renderCopyright();


//skills section
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

const messageForm = document.getElementsByName('leave-a-message');
const messageSection = document.getElementById('messages');


messageForm.item(0).addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    console.log(name);
    console.log(email);
    console.log(message);

    if (!name || !email ||!message) {
        return
    }

});

const githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/raissanfg/repos');
githubRequest.send();
githubRequest.addEventListener('load', function() {
const repositories = JSON.parse(this.response)

const projectSection = document.querySelector('../static/projects.css')
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

    
    const projectSection = document.querySelector('#projects')
    const projectList = projectSection.querySelector('ul')

         for (let i=0; i < repositories.length; i++) {
         var project = document.createElement('li' );
         var repositoryLink = document.createElement('a');
         repositoryLink.href = repositories[i].html_url;
         repositoryLink.innerHTML = repositories[i].name;
       
         renderProjectsWithFetch();   
        
}
})
}

TB.render('leave-a-message', function(data) {
    data.ele.find('.af-form-submit').on('click', function() {
        location.reload();
    });
});

