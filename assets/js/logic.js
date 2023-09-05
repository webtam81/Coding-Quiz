//variables
let startQuizBtn = document.querySelector('#start');
let timeEl = document.querySelector('#time');
let timeLimit = 60;

//functions
//timer
function timer() {
    let timerInterval = setInterval(function() {

        timeEl.textContent = timeLimit;

        if (timeLimit === 0) {
            clearInterval(timerInterval);
            console.log(`time up!`); //TODO rm
            //TODO jump to end
        }

        timeLimit--;

    }, 10);
}

//event listeners
startQuizBtn.addEventListener('click', function() {
    console.log(`start button pressed`); //TODO rm
    //TODO - show first question
    timer();
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

//tests





