let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userWinCount = document.querySelector("#user-score");
const compWinCount = document.querySelector("#comp-score");
const newGameBtn = document.querySelector("#new-btn");


// start a new game
const newGame = () => {
        userScore=0;
        compScore=0;
        userWinCount.innerText=0;
        compWinCount.innerText=0;
        msg.innerText="New Game Started!";
        msg.style.backgroundColor="black";
}
// generate computer choice
const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const rdmIndex = Math.floor(Math.random()*3);
    return options[rdmIndex];
}

const drawGame = () => {
    msg.innerText = "Game Draw! , Play Again";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userWinCount.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compWinCount.innerText=compScore;
        msg.innerText = `Computer Won! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compWinCount.innerText = compWinCount++;
    }
}

const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        // game is draw
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // comp choice : "paper" OR "scissors"
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // comp choice : "rock" OR "scissors"
            userWin = compChoice === "scissors" ? false : true;
        } else if(userChoice === "scissors"){
            // comp choice : "rock" OR "paper"
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
newGameBtn.addEventListener("click" , newGame);
