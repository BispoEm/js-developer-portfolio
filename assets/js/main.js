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
  phone.href = `tel:${profileData.phone}`
  const email = qs('.profile-email')
  email.innerText = profileData.email
  email.href = `mailto:${profileData.email}`
}


(async () => {
  const profileData = await fetchProfileData()
  updateProfileInfo(profileData)
})()