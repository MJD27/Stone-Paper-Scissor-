let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const ComputerScorePara = document.querySelector("#computer-Score");


const genComputerChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawgame = () => {
    msg.innerText = "Match draw!";
    msg.style.backgroundColor = "yellow";
};

const showWinner = (userWin, userChoice, ComputerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${ComputerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        ComputerScorePara.innerText = compScore;
        msg.innerText = `You lose! ${ComputerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //Generate computer choice
    const ComputerChoice = genComputerChoice();
    if(userChoice === ComputerChoice){
        //draw game
        drawgame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissor
            userWin = ComputerChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, scissor
           userWin = ComputerChoice === "scissor" ? false : true;
        } else {
            //rock, paper
            userWin = ComputerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, ComputerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});