let yourScore = 0;
let compScore = 0;
let music = new Audio("BG-MUSIC.mp3");
document.onkeydown = function (e) {
    console.log("key code is", e.key)
    if (e.key == "ArrowLeft") {
        yourScore++;
        char2 = document.querySelector('.obstacle');
        char2.classList.add('animatechar2');
        setTimeout(() => {
            char2.classList.remove('animatechar2');
        }, 700)
    }
    if (e.key == "ArrowRight") {
        char2 = document.querySelector('.obstacle');
        char2.classList.add('animatechar2Left');
        setTimeout(() => {
            char2.classList.remove('animatechar2Left');
        }, 700)
    }
    if (e.key == "ArrowUp") {
        char2 = document.querySelector('.obstacle');
        char2.classList.add('animatechar2Up');
        setTimeout(() => {
            char2.classList.remove('animatechar2Up');
        }, 700)
    }
}

music.play();

setInterval(() => {
    let gameStart = document.querySelector('.gameOver');
    gameStart.style.visibility = "hidden";
}, 6000);

setTimeout(() => {
    let gameStart = document.querySelector('.gameOver');
    gameStart.classList.add('gameStart');
    gameStart.innerHTML = "Game Over";
    gameStart.style.visibility = "visible";
    compScore = Math.floor(Math.random() * 4) + 7;
    let scores = document.querySelector('#scores');
    scores.style.visibility = "visible";
    console.log(compScore);
    document.querySelector('.yours').innerHTML = '&#128511' + "  " + "Your Score : " + yourScore + "  " + `&#128516`;
    document.querySelector('.comps').innerHTML = '&#128511' + "  " + "Computer Score : " + compScore + "  " + `&#128516`;
    setTimeout(() => {
        if (compScore > yourScore) {
            gameStart.innerHTML = "Computer Wins";
        } else if (compScore < yourScore) {
            gameStart.innerHTML = "Congratulation! You Wins";
        } else if (compScore == yourScore) {
            gameStart.innerHTML = "Game Draw";
        }
    }, 1000)
    document.querySelector('.char1').style.animation = "none";
    document.querySelector('.animatechar1').style.animation = "none";

    showScore();
}, 20000);

function showScore() {
    setTimeout(() => {
        function relod() {
            window.location.reload();
        }
        relod();
    }, 6500);
}


rgb(217, 231, 21)