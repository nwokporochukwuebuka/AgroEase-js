
// function changeDisplay(answerText) {
//   if(answerText.hasAttribute("style"))
//     answerText.removeAttribute("style")
//   else answerText.style.display = 'block';
// }

// function displayAnswer1() {
//   let answerText = document.getElementById('answer-text-1');
//   changeDisplay(answerText)
// }

// function displayAnswer2() {
//   let answerText = document.getElementById('answer-text-2');
//   changeDisplay(answerText)
// }

// function displayAnswer3() {
//   let answerText = document.getElementById('answer-text-3');
//   changeDisplay(answerText)
// }

// function displayAnswer4() {
//   let answerText = document.getElementById('answer-text-4');
//   changeDisplay(answerText)
// }

// function displayAnswer5() {
//   let answerText = document.getElementById('answer-text-5');
//   changeDisplay(answerText)
// }

var question =document.querySelectorAll('.question-card');
var answer = document.querySelectorAll('.answer-text');
var plusIcon = document.querySelectorAll('.plus-btn');
var minusIcon = document.querySelectorAll('.minus-btn');
for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click',()=> {
    if(answer[i].hasAttribute("style")){
      plusIcon[i].style.display= 'block';
      minusIcon[i].style.display= 'none';
    answer[i].removeAttribute("style")
  }
    else{
      answer[i].style.display = 'block';
      plusIcon[i].style.display= 'none';
    minusIcon[i].style.display= 'block';
    } 
  })
}
