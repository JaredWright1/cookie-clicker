let score = 0;

const cookie = document.getElementById("clicks");
const scores = document.getElementById("h1");
const reset = document.getElementById("button");

function addScore() {
    score++;
    scores.innerText = score;
}

function ResetScore() {
    score = 0;
    scores.innerText = score;
}

cookie.addEventListener("click", addScore);
reset.addEventListener("click", ResetScore);