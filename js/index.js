
const renderCopyright = () => {
    const today = new Date();
    const thisYear = today.getFullYear();

    const copyright = document.querySelector('#copyright');
    
    if (copyright) {
        copyright.innerHTML = `&copy; Raissa Gomes ${thisYear}`;
    }
}

renderCopyright();


// Skills 
document.addEventListener('DOMContentLoaded', () => {
    const renderSkillsList = () => {
        const skills = ['HTML', 'CSS', 'JAVASCRIPT', 'GIT/GITHUB', 'REACT']
        
        // DOM
        const skillsSection = document.getElementById('skills');

        if (skillsSection) {
            const skillsList = skillsSection.querySelector('ul');
            skillsList.classList.add('small-font');
            
            for (let i = 0; i < skills.length; i++) {
                const skill = document.createElement('li');
                skill.innerHTML = skills[i];
                skill.className = 'skl';
                skillsList.appendChild(skill);
            }
        }
    }
    
    renderSkillsList();
});