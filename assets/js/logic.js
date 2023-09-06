//VARIABLES
let numberOfQuestions = 5;
let timeLimit = (((numberOfQuestions * 10)+10));

let startQuizBtn = document.querySelector('#start');
let timeEl = document.querySelector('#time');
let startDiv = document.querySelector('#start-screen');
let questionDiv = document.querySelector('#questions');
let endDiv = document.querySelector('#end-screen');
let questionTitle = document.querySelector('#question-title');
let questionChoices = document.querySelector('#choices');
let choiceBtns = [];
let currentQuestion = 0;
let correctAnswer = questions[currentQuestion].correctAnswer;
let feedbackEl =  document.querySelector('#feedback');

//FUNCTIONS
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
    questionTitle.textContent = questions[i].question;
    questionChoices.innerHTML = '<button data-num="1" class="choice-btn">' + questions[i].answer1 + '</button>  <button data-num="2" class="choice-btn">' + questions[i].answer2 + '</button> <button data-num="3" class="choice-btn">' + questions[i].answer3 + '</button> <button data-num="4" class="choice-btn">' + questions[i].answer4 + '</button>';
    choiceBtns = document.querySelectorAll('.choice-btn');
    addChoiceListeners();
}

//add listeners to choice buttons
function addChoiceListeners() {
    //console.log(`listeners`); TODO rm
    choiceBtns.forEach(function (j) {
        j.addEventListener('click', function() {
            //console.log(`choice button pressed`); //TODO rm
            feedbackEl.classList.remove('hide');
            let chosenAnswer = j.getAttribute('data-num');
            if (chosenAnswer == correctAnswer) {
                feedbackEl.textContent = "Correct!";
            }
            else {
                feedbackEl.textContent = "Wrong!";
                timeLimit = timeLimit - 9;
            }
            if (currentQuestion < (numberOfQuestions - 1)) {
                nextQuestion();
            } else {
                endGame();
            }
        });
    });
}

//navigate questions
function nextQuestion() {  
    currentQuestion++;
    populateQuestion();
}

//go to end page
function endGame() {

}

//EVENT LISTENERS
//start quiz/populate first question
startQuizBtn.addEventListener('click', function() {
    console.log(`start button pressed`); //TODO rm
    startDiv.classList.add('hide');
    questionDiv.classList.remove('hide');
    timer();
    populateQuestion();
});




//DONE
//start quiz screenr
//start timer - 60s
//first question
//buttons for answers

//TODO
//check answer



//if wrong, decuct time, show message, proceed

//if correct, show message?, proceed

//5 questions

//End screen with high score initial capture

//High score page with clear button

//tests
console.log(correctAnswer);




