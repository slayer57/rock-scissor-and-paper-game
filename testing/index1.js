let player = document.querySelector("#player");
let computer = document.querySelector("#computer");
let result = document.querySelector("#result");

let pickBtn = document.querySelectorAll(".pickBtn");

let playerTurn;
let computerTurn;
let resultTurn;

for (let i = 0; i < pickBtn.length; i++) {
    pickBtn[i].addEventListener("click", () => {
        let playerTurn = pickBtn[i].textContent;
        let computerTurn = createFunction();
        player.textContent = `Player: ${playerTurn}`;
        computer.textContent = `Computer: ${computerTurn}`;
        result.textContent = finalFunction(playerTurn, computerTurn);
    });
}

createFunction = () => {
    let choice = ["rock", "paper", "scissor"];
    let randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

 finalFunction = (playerTurn, computerTurn) => {
    if (playerTurn === computerTurn) {
        return "Draw";
    } else if (
        (playerTurn === "rock" && computerTurn === "scissor") ||
        (playerTurn === "paper" && computerTurn === "rock") ||
        (playerTurn === "scissor" && computerTurn === "paper")
    ) {
        return "Player won";
    } else {
        return "Computer won";
    }
}
