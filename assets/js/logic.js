//variables
let startQuizBtn = document.querySelector('#start');
let timeEl = document.querySelector('#time');
let timeLimit = 60;

//functions
//timer
let timer = setInterval(function() {
    timeEl.textContent = timeLimit;
    timeLimit--;
}, 1000);

//event listeners
startQuizBtn.addEventListener('click', function() {
    console.log(`start button pressed`);
    //TODO - show first question
    //TODO - start timer
});

//start quiz screen

//start timer - 60s

//first question

//buttons for answer

//if wrong, decuct time, show message

//if correct, show message?, proceed

//5 questions

//End screen with high score initial capture

//High score page with clear button







