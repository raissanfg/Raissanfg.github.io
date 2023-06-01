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
  const repositories = [
    { name: 'Personal.Project.G-Code-HOUSE', imageUrl: '../media/g-code.jpg', description: 'This is my first project ever, which I completed during my participation in G-Code House, a bootcamp focused on web development fundamentals.' },
    { name: 'Intro-to-Programming-Dorado', imageUrl: '../media/Dorado.jpg', description: 'As part of my training at Code the Dream bootcamp, I designed and developed a personal website project using CSS, HTML, and JavaScript.' },
    { name: 'Raissanfg.github.io', imageUrl: '../media/Personal.jpg', description: ' This project is my favorite so far, I built this personal website project by incorporating the knowledge gained from my previous bootcamps.' },
    { name: 'road-to-react', imageUrl: '../media/RoadToReact.jpg', description: 'Currently, I am engaged in an ongoing project where I am learning React by following along with the book Road to React.' },
    { name: 'react-todo', imageUrl: '../media/TodoList.jpg', description: 'In collaboration with my current bootcamp, Code the Dream, I am actively working on an ongoing project to learn React and create a todo app. ' },
    { name: 'Udacity-Blog-Project', imageUrl: '../media/Blog-Comunity.jpg', description: 'Through my bootcamp with Udacity, I am learning advanced development skills, and I created a blog/community to support women who have experienced miscarriages' }
  ];

  const promises = repositories.map((repo) =>
    fetch(`https://api.github.com/repos/raissanfg/${repo.name}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`Error fetching ${repo.name}: ${res.status} ${res.statusText}`);
        }
      })
  );

  Promise.all(promises)
    .then((data) => {
      const projectSection = document.getElementById('projects');

      if (projectSection) {
        const projectList = projectSection.querySelector('ul');

        for (let i = 0; i < data.length; i++) {
          const repoData = data[i];
          const repository = repositories[i];

          const project = document.createElement('li');
          const repositoryLink = document.createElement('a');
          repositoryLink.href = repoData.html_url;
          repositoryLink.innerHTML = repoData.name;

          const image = document.createElement('img');
          image.src = repository.imageUrl;
          image.style.width = '100%';
          image.style.height = '200px';
          image.style.padding = '15px';

          const description = document.createElement('p');
          description.textContent = repository.description;

          projectList.appendChild(project);
          project.appendChild(repositoryLink);
          project.appendChild(image);
          project.appendChild(description);
        }
      }
    })
    .catch((error) => {
      console.error('Error fetching repositories:', error);
    });
}

// Call the function
renderProjectsWithFetch();



// Render projects with fetch
//function renderProjectsWithFetch() {
  //  fetch('https://api.github.com/users/raissanfg/repos')
  //  .then((res) => res.json())
  //  .then((data) => {
   //     const projectSection = document.getElementById('projects');

   //     if (projectSection) {
      //      const projectList = projectSection.querySelector('ul');

       //     for (let i = 0; i < data.length; i++) {
       //         const project = document.createElement('li');
        //        const repositoryLink = document.createElement('a');
       //         repositoryLink.href = data[i].html_url;
        //        repositoryLink.innerHTML = data[i].name;
        //        projectList.appendChild(project);
        //        project.appendChild(repositoryLink);
       //     }
    //    }
 //   });
//}

// Call the function
//renderProjectsWithFetch();
