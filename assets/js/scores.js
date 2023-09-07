let clearBtn = document.querySelector('#clear');
let highscoreEL = document.querySelector('#highscores');
let scoreArray = JSON.parse(localStorage.getItem('highscores'));

clearBtn.addEventListener('click', function() {
    //single score
    localStorage.removeItem('highscore');
    //list of scores
    //localStorage.removeItem('highscores');
});

function listScores() {
    //single score
    highscoreEL.innerHTML = '<li>' + localStorage.getItem('highscore'); + '</li>';
    //list of scores
    //console.log(scoreArray.length);
    //highscoreEL.innerHTML = '<li>' + localStorage.getItem('highscores'); + '</li>';
}

listScores(); 

// get high scores from local storage
// sort high to low
//create li for each one