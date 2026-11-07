let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options [randomIdx];
}


const playGame = () => {
 
    const compChoice = genCompChoice();
    console.log(compChoice, "is of computer choice");
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice, "is your choice");
        playGame(userChoice);
    });
});