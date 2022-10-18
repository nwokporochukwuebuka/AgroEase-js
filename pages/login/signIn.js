import { getData } from '../../constants.js'

// first we get the email we set in the local storage
console.log(getData("email"));
document.getElementById("loginemail").value = getData("email");