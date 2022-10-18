// Radio button functionality
function check() {
  document.getElementById("male").checked = true;
}
function uncheck() {
  document.getElementById("female").checked = false;
}

const submitButton = document.getElementById("bub");
submitButton.addEventListener("click", sub);

function sub() {
  document.getElementById("overlay").style.display = "block";
  let brokerID = (document.getElementById("ID").innerHTML =
    Math.floor(Math.random() * 90000) + 10000);
  localStorage.setItem("ID", brokerID);
}

const closeButton = document.getElementById("close");
closeButton.addEventListener("click", off);

function off() {
  window.location = "/pages/homepage/homepage.html";
}
