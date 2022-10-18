const allTogglePassword = document.querySelectorAll('.create-password i');

for (let i = 0; i < allTogglePassword.length; i++) {
  allTogglePassword[i].addEventListener("click", function(){
    const inputType = this.nextElementSibling;
    const type = inputType.getAttribute("type") === "password" ? "text": "password";
    inputType.setAttribute("type", type);
    if(this.classList.contains("fa-eye")){
      this.classList.remove('fa-eye');
      this.classList.add('fa-eye-slash');
    }else{
      this.classList.remove('fa-eye-slash');
      this.classList.add('fa-eye');
    }
  });
}


//prevent form submit
const form = document.querySelector("form");
form.addEventListener("submit", function(e){
  e.preventDefault();
})

// function validatePassword(element) {
//   const passwordRegEx = /^9?=.
//   const password = element.value.trim()
//   if (!passwordRexEx.test(password)) {
//     const errorBox = element.parentNode.querySelector('small')
//     errorBox.innerText = "Password be alphanumeric, const"
//     element.className = "error"
//     return false;
//   }
// }


// grabbing the form using the id
const createAccountForm = document.forms['createAccountForm'];

import {  validatePassword } from '../../validation.js';
import { setData, showMessage } from '../../constants.js'

// add an even listener to grab when the form will be submitted

// grabbing the button 
const signupButton = document.getElementById('submit-btn');

signupButton.addEventListener('click', (e) => {
    // first we prevent the default action
    e.preventDefault();

    // grabbing all the inputs needed
    const email = createAccountForm["email"];
    const password = createAccountForm["password"];
    const cpassword = createAccountForm["cpassword"];

    console.log(password.value, cpassword.value);

    // first let's check if the pasword match
    if(password.value !== cpassword.value){
        showMessage(cpassword, "Password mismatch, please try again")
        return false;
    }

    //next we check if the password is a valid password using the password regex
    if(validatePassword(cpassword)){

        // pushing the email to local storage
        setData("email", email.value);
        setTimeout(() => {
            window.location = '../login/login.html';
            
        }, 2000);
    }   
})