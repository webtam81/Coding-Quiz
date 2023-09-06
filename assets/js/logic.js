//variables
let numberOfQuestions = 5;
let timeLimit = (((numberOfQuestions * 10)+10));

let startQuizBtn = document.querySelector('#start');
let timeEl = document.querySelector('#time');
let startDiv = document.querySelector('#start-screen');
let questionDiv = document.querySelector('#questions');
let endDiv = document.querySelector('#end-screen');
let questionTitle = document.querySelector('#question-title');
let questionChoices = document.querySelector('#choices');
let currentQuestion = 0;

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

//populate question
function populateQuestion() {
    i = currentQuestion;
    d = i + 1;
    let correctAnswer = questions[i].correctAnswer;
    questionTitle.textContent = questions[i].question;
    questionChoices.innerHTML = '<button data-num="1">' + questions[i].answer1 + '</button>  <button data-num="2">' + questions[i].answer2 + '</button> <button data-num="3">' + questions[i].answer3 + '</button> <button data-num="4">' + questions[i].answer4 + '</button>';
}

//navigate questions

//check answer

//event listeners
startQuizBtn.addEventListener('click', function() {
    console.log(`start button pressed`); //TODO rm
    startDiv.classList.add('hide');
    questionDiv.classList.remove('hide');
    timer();
    populateQuestion();
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





