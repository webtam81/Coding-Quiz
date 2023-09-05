//variables
let startQuizBtn = document.querySelector('#start');
let timeEl = document.querySelector('#time');
let timeLimit = 60;
let startDiv = document.querySelector('#start-screen');
let questionDiv = document.querySelector('#questions');
let endDiv = document.querySelector('#end-screen');

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

    }, 1000);
    //}, 10);//TODO rm
}

//event listeners
startQuizBtn.addEventListener('click', function() {
    console.log(`start button pressed`); //TODO rm
    startDiv.classList.add('hide');
    questionDiv.classList.remove('hide');
    timer();
});


//start quiz screenr
//start timer - 60s

//first question

//buttons for answers

//if wrong, decuct time, show message, proceed

//if correct, show message?, proceed

//5 questions

//End screen with high score initial capture

//High score page with clear button

//tests





