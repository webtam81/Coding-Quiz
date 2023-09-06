//VARIABLES
let numberOfQuestions = 5;
//let timeLimit = (((numberOfQuestions * 10)+10));
let timeLimit = 60;
let startQuizBtn = document.querySelector('#start');
let timeEl = document.querySelector('#time');
let startDiv = document.querySelector('#start-screen');
let questionDiv = document.querySelector('#questions');
let endDiv = document.querySelector('#end-screen');
let questionTitle = document.querySelector('#question-title');
let questionChoices = document.querySelector('#choices');
let choiceBtns = [];
let currentQuestion = 0;
let correctAnswer = 0;
let feedbackEl =  document.querySelector('#feedback');
let finalScoreEl = document.querySelector('#final-score');
let gameOver = false;
let highScore = document.querySelector('#initials');

//FUNCTIONS
//timer
function timer() {
    let timerInterval = setInterval(function() {

        timeEl.textContent = timeLimit;

        if (timeLimit === 0) {
            clearInterval(timerInterval);
            //console.log(`time up!`); //TODO rm
            endGame();
        }

        if (gameOver == true) {
            clearInterval(timerInterval);
        }

        timeLimit--;

    }, 1000);
    //}, 10);//TODO rm
}

//populate question
function populateQuestion() {
    i = currentQuestion;
    correctAnswer = questions[currentQuestion].correctAnswer;
    //console.log(`correct answer: ${correctAnswer}`); //TODO rm
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
                if (timeLimit >= 9) {
                    timeLimit = timeLimit - 9;
                } else {
                    timeLimit = 0;
                    endGame();
                }
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
    questionDiv.classList.add('hide');
    endDiv.classList.remove('hide');
    gameOver = true;
    finalScoreEl.textContent = timeLimit;
}

//EVENT LISTENERS
//start quiz/populate first question
startQuizBtn.addEventListener('click', function() {
    //console.log(`start button pressed`); //TODO rm
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
//check answer
//if wrong, decuct time, show message, proceed
//if correct, show message?, proceed
//5 questions

//TODO






//End screen with high score initial capture



//High score page with clear button

//tests
//console.log(correctAnswer); //TODO rm




