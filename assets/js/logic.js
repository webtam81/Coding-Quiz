//VARIABLES
let numberOfQuestions = 5;
let timeLimit = 60;
let currentQuestion = 0;
let correctAnswer = 0;
let gameOver = false;
let scoreArray = [];
let newScore;

let startDiv = document.querySelector('#start-screen');
let questionDiv = document.querySelector('#questions');
let endDiv = document.querySelector('#end-screen');

let questionTitle = document.querySelector('#question-title');
let questionChoices = document.querySelector('#choices');

let startQuizBtn = document.querySelector('#start');
let submitScoreBtn = document.querySelector('#submit');
let choiceBtns = [];

let timeEl = document.querySelector('#time');
let feedbackEl =  document.querySelector('#feedback');
let finalScoreEl = document.querySelector('#final-score');

let initialsInput = document.querySelector('#initials');

//FUNCTIONS
//timer
function timer() {
    let timerInterval = setInterval(function() {

        timeEl.textContent = timeLimit;

        if (timeLimit === 0) {
            clearInterval(timerInterval);
            endGame();
        }

        if (gameOver == true) {
            clearInterval(timerInterval);
        }

        timeLimit--;

    }, 1000);
}

//populate question
function populateQuestion() {
    i = currentQuestion;
    correctAnswer = questions[currentQuestion].correctAnswer;
    questionTitle.textContent = questions[i].question;
    questionChoices.innerHTML = '<button data-num="1" class="choice-btn">' + questions[i].answer1 + '</button>  <button data-num="2" class="choice-btn">' + questions[i].answer2 + '</button> <button data-num="3" class="choice-btn">' + questions[i].answer3 + '</button> <button data-num="4" class="choice-btn">' + questions[i].answer4 + '</button>';
    choiceBtns = document.querySelectorAll('.choice-btn');
    addChoiceListeners();
}

//add listeners to choice buttons
function addChoiceListeners() {
    choiceBtns.forEach(function (j) {
        j.addEventListener('click', function() {
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

function saveScore() {
    //single score
    localStorage.setItem('highscore', newScore);
    //all scores
    //localStorage.setItem('highscore', timeLimit); //TODO rm
    //scoreArray = JSON.parse(localStorage.getItem("highscores"));
    //console.log(scoreArray);
    //console.log(newScore);
    //scoreArray.push(newScore);
    //localStorage.setItem('highscores',JSON.stringify(scoreArray));
    window.location.href = "./highscores.html";
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

//clear feedback on mouse move
document.addEventListener('mousemove', function() {
    feedbackEl.classList.add('hide');
});

//get initials
submitScoreBtn.addEventListener('click', function() {
    newScore = initialsInput.value.trim() + ' - ' + timeLimit;
    saveScore();
});

//TODO
//End screen with high score initial capture
//High score page with clear button

//TESTS
//console.log(correctAnswer); //TODO rm




