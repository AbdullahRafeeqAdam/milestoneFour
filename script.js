var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var location = document.getElementById('location').value;
    var email = document.getElementById('email').value;
    var summary = document.getElementById('summary').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value.split(',');
    document.getElementById('resume').style.display = 'block';
    updateResume(name, location, email, summary, education, experience, skills);
});
function updateResume(name, location, email, summary, education, experience, skills) {
    document.getElementById('resumeName').innerText = name;
    document.getElementById('resumeLocation').innerText = location;
    document.getElementById('resumeEmail').innerText = email;
    document.getElementById('resumeSummary').innerText = summary;
    document.getElementById('resumeEducation').innerText = education;
    document.getElementById('resumeExperience').innerText = experience;
    var skillsList = document.getElementById('resumeSkills');
    skillsList.innerHTML = '';
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
}
function editField(fieldId) {
    var displayElement = document.getElementById('resume' + capitalize(fieldId));
    if (displayElement) {
        var currentValue = displayElement.innerText;
        var inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = currentValue;
        inputField.id = fieldId + 'EditInput';
        displayElement.innerHTML = '';
        displayElement.appendChild(inputField);
        var saveButton = document.createElement('button');
        saveButton.innerText = 'Save';
        saveButton.classList.add('save-btn');
        saveButton.onclick = function () { return saveField(fieldId); };
        displayElement.appendChild(saveButton);
    }
}
function saveField(fieldId) {
    var inputField = document.getElementById(fieldId + 'EditInput');
    var newValue = inputField.value;
    var displayElement = document.getElementById('resume' + capitalize(fieldId));
    if (displayElement) {
        displayElement.innerHTML = newValue;
    }
}
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
