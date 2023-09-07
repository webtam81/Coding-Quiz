let clearBtn = document.querySelector('#clear');
let highscoreEL = document.querySelector('#highscores');


clearBtn.addEventListener('click', function(event) {
    
    localStorage.removeItem('highscore');
    //console.log('clear the scores'); //TODO RM

});

function listScores() {
    
    highscoreEL.innerHTML = '<li>' + localStorage.getItem('highscore'); + '</li>';
}

listScores(); 

// get high scores from local storage
// sort high to low
//create li for each one