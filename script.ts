document.getElementById('resumeForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');


    (document.getElementById('resume') as HTMLElement).style.display = 'block';


    updateResume(name, location, email, summary, education, experience, skills);
});

function updateResume(name: string, location: string, email: string, summary: string, education: string, experience: string, skills: string[]) {
    (document.getElementById('resumeName') as HTMLElement).innerText = name;
    (document.getElementById('resumeLocation') as HTMLElement).innerText = location;
    (document.getElementById('resumeEmail') as HTMLElement).innerText = email;
    (document.getElementById('resumeSummary') as HTMLElement).innerText = summary;
    (document.getElementById('resumeEducation') as HTMLElement).innerText = education;
    (document.getElementById('resumeExperience') as HTMLElement).innerText = experience;


    const skillsList = document.getElementById('resumeSkills') as HTMLElement;
    skillsList.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
}

function editField(fieldId: string) {
    const displayElement = document.getElementById('resume' + capitalize(fieldId));
    
    if (displayElement) {
        const currentValue = displayElement.innerText;
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = currentValue;
        inputField.id = fieldId + 'EditInput';

        displayElement.innerHTML = '';
        displayElement.appendChild(inputField);
        const saveButton = document.createElement('button');
        saveButton.innerText = 'Save';
        saveButton.classList.add('save-btn');
        saveButton.onclick = () => saveField(fieldId);
        displayElement.appendChild(saveButton);
    }
}

function saveField(fieldId: string) {
    const inputField = document.getElementById(fieldId + 'EditInput') as HTMLInputElement;
    const newValue = inputField.value;

    const displayElement = document.getElementById('resume' + capitalize(fieldId));
    if (displayElement) {
        displayElement.innerHTML = newValue;
    }
}

function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
