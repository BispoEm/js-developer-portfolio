const qs = (el) => document.querySelector(el);
const qsA = (el) => document.querySelectorAll(el);

function updateProfileInfo(profileData){
  const photo = qs('.profile-photo')  
  photo.src = profileData.photo 
  photo.alt = profileData.name 
  const name = qs('.profile-name')
  name.innerText = profileData.name
  const job = qs('.profile-job')
  job.innerText = profileData.job
  const location = qs('.profile-location')
  location.innerText = profileData.location
  const phone = qs('.profile-phone')
  phone.innerText = profileData.phone
  phone.href = `https://wa.me/55${profileData.phone}`
  const email = qs('.profile-email')
  email.innerText = profileData.email
  email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData){
  const softSkills = qs('.profile-skills-softSkills')
  softSkills.innerHTML = profileData.skills.softSkills
  .map(skill => `<li>${skill}</li>`).join("")
}
function updateHardSkills(profileData){
  const hardSkills = qs('.profile-skills-hardSkills')
  hardSkills.innerHTML = profileData.skills.hardSkills
  .map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"> </li>`).join("")
}
function updateLanguage(profileData){
  const languages = qs('.profile-languages')
  languages.innerHTML = profileData.languages
  .map(language => `<li>${language}</li>`).join("")
}
function updatePortfolio(profileData){
  const portfolio = qs('.profile-portfolio')
  portfolio.innerHTML = profileData.portfolio.map(project => 
    `<li>
      <h3 ${project.github?'class="github"':''}>${project.name}</h3>
      <a href="${project.url}" target="_blank">${project.url}</a>
    </li>`).join('')
}
function updateProfessionalExperience(profileData){
  const experience = qs('.profile-professional-experience')
  experience.innerHTML =   profileData.professionalExperience.map(exp => 
    `<li>
      <h3 class="title">${exp.name}</h3>
      <p class="period">${exp.period}</p>
      <p>${exp.description}</p>
    </li>`)
}

(async () => {
  const profileData = await fetchProfileData()
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguage(profileData);
  updatePortfolio(profileData)
  updateProfessionalExperience(profileData)
})()