let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options [randomIdx];
}

const drawGame = () => {
    console.log("Game was a Draw");
    msg.innerText = "Game was a Draw";
    msg.style.backgroundColor = "brown";
    
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("You are a Winner!");
        msg.innerText = "You are a Winner!";
        msg.style.backgroundColor = "green";
    }else{
        console.log("You Lose, Try again");
        msg.innerText = "You Lose, Try again";
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    console.log(userChoice, "is of your choice");
    const compChoice = genCompChoice();
    console.log(compChoice, "is of computer choice");

    if(userChoice === compChoice){
        drawGame();     //draw condition in game  
    }else{
        let userWin = true;
        if(userChoice === "rock"){
             userWin = compChoice === "paper" ? false : true;   //computer selecting paper and scissors

        }else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;    //computer selecting rock and scissors

        }else{
            userWin = compChoice === "rock" ? false : true;   //computer selecting rock and paper
        }
        showWinner(userWin);
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});