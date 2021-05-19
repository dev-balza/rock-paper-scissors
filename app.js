// Points counter
let computerScore = 0;
let playerScore = 0;

// Function that returns the player's move
function playerPlay() {
  const playOptions = prompt("rock, paper or scissors?").toLowerCase();
  return playOptions;
}

// Function that returns the computer's move
function computerPlay() {
  const playOptions = ["rock", "paper", "scissors"];
  return playOptions[Math.floor(Math.random() * playOptions.length)];
}

// Function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  console.log("Player's move: " + playerSelection);
  console.log("Computer's move: " + computerSelection);
  if (!playerSelection) {
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    return "You must select a move to play!";
  } else if (playerSelection === computerSelection) {
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    return "Tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    return "You lose! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection === "rock") {
    playerScore += 1;
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    return "You win! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    return "You win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    return "You lose! Scissors beats Paper";
  } else {
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    return "Your move! is not valid!";
  }
}

// Function that plays the game
function game() {
  if (playerScore !== 3 && computerScore !== 3) {
    for (let i = 0; i < 100; i++) {
      if (playerScore === 3) {
        console.log("Player wins!");
        break;
      } else if (computerScore === 3) {
        console.log("Computer wins!");
        break;
      }
      const playerMove = playerPlay();
      const computerMove = computerPlay();
      console.log(playRound(playerMove, computerMove));
    }
  }
}

game();
