import {  showMessage } from "./constants.js";

// validating the password 
export function validatePassword(password){
    /* This function will return true if the password
    is correctly validated 
    */
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$/;

    // next we trim for whitespaces 
    if(!passwordRegex.test(password.value.trim())){
        showMessage(password, "Password must contain alphanumeric character with atleast one uppercase, lowercase and special character");
        return false;
    }

    return true;
}