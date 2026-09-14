// Welcome message
console.log("Welcome to my website!");

// Button click function
function showMessage() {
    alert("Welcome! Thanks for visiting my website 😊");
}

// Change heading text
function changeText() {
    const heading = document.getElementById("heading");
    heading.textContent = "Welcome to My Website!";
}
let gameStarted = false;

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        gameLoop();
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;

    playerY = canvas.height / 2 - paddleHeight / 2;
    computerY = canvas.height / 2 - paddleHeight / 2;

    resetBall();

    gameStarted = true;
}
