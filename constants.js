// set an item to teh local storage
export function setData(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

// get an Item from the local storage 
export function getData(key){
    return JSON.parse(localStorage.getItem(key));
}

// show an error message
export function showMessage(element, errorMessage){
    // first we grab the error element
    const errorElement = element.parentNode.parentNode.querySelector('div p');

    console.log(errorElement)

    // adding the class of error message to it
    errorElement.className = "errorMessage";

    // next we add the text
    errorElement.textContent = errorMessage;

    // return false;
}