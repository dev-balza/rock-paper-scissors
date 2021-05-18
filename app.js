// Function that returns the player's move
function playerPlay() {
  return prompt("rock, paper or scissors?").toLowerCase();
}

// Function that returns the computer's move
function computerPlay() {
  const playOptions = ["rock", "paper", "scissors"];
  return playOptions[Math.floor(Math.random() * playOptions.length)];
}

// Player selection
const playerMove = playerPlay();
console.log("Player: " + playerMove);

// Computer selection
const computerMove = computerPlay();
console.log("Computer: " + computerMove);

// Function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  if (!playerSelection) {
    return "You must select a move to play!";
  } else if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats Paper";
  } else {
    return "Your move! is not valid!";
  }
}

// Print round result
console.log(playRound(playerMove, computerMove));

