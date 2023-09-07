let clearBtn = document.querySelector('#clear');
let highscoreEL = document.querySelector('#highscores');
let scoreArray = [];

clearBtn.addEventListener('click', function() {
    //single score
    //localStorage.removeItem('highscore');
    //list of scores
    localStorage.removeItem('highscores');
    scoreArray = [];
    listScores();
});

function getScores() {
    if (localStorage.getItem('highscores')) {
        scoreArray = JSON.parse(localStorage.getItem('highscores'));
    }
}

function listScores() {
    //single score
    //if (localStorage.getItem('highscore')) {
    //    highscoreEL.innerHTML = '<li>' + localStorage.getItem('highscore'); + '</li>';
    //} else {
    //    highscoreEL.innerHTML = "";
    //}
    //list of scores
    //console.log(scoreArray.length);
    //highscoreEL.innerHTML = '<li>' + localStorage.getItem('highscores'); + '</li>';
    console.log(scoreArray);
    console.log(scoreArray.length);
    if (scoreArray.length > 0) {
        for (h = 0; h < scoreArray.length; h++) {
           highscoreEL.innerHTML = highscoreEL.innerHTML +'<li>' + scoreArray[h] + '</li>';
        }
    }
}

getScores();
listScores(); 

// get high scores from local storage
// sort high to low
//create li for each one