
const form = document.getElementById('loginForm')
const modal =document.getElementById('pop-up-modal')
const closeModal = document.getElementById('close-modal')
form.addEventListener('submit', function(event){
    event.preventDefault()

modal.style.display = "block"
  // window.location.href ='/pages/contact/thankYou.html'

})

closeModal.addEventListener('click', function(click){
  modal.style.display ="none"
location.reload()
})
