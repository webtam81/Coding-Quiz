let clearBtn = document.querySelector('#clear'); //clear high scores button
let highscoreEL = document.querySelector('#highscores'); //high score list
let scoreArray = []; //array for scores

//remove scores from localstorage and also scoresarray when clear button is clicked
clearBtn.addEventListener('click', function() {
    localStorage.removeItem('highscores');
    scoreArray = [];
    listScores();
});

//if there are scores in localstorage, put them in an array
function getScores() {
    if (localStorage.getItem('highscores')) {
        scoreArray = JSON.parse(localStorage.getItem('highscores'));
    }
}

//if there are scores then add them to the score list
function listScores() {
    if (scoreArray.length > 0) {
        for (h = 0; h < scoreArray.length; h++) {
           highscoreEL.innerHTML = highscoreEL.innerHTML +'<li>' + scoreArray[h] + '</li>';
        }
    } else {
        highscoreEL.innerHTML = "";
    }
}

//run these to initialise the page
getScores();
listScores(); 

//TODO
//sort scores high to low
