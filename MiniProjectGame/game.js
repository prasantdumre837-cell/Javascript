let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    Math.random();
}


const playGame = () => {
    console.log("user choice =", userChoice);
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice, "is your choice");
        playGame(userChoice);
    });
});