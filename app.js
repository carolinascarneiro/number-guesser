let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

let generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (hGuess, cGuess, target) => {
    const difHum = Math.abs(target - hGuess);
    const difComp = Math.abs(target - cGuess);

    if (difHum <= difComp) {
      return true;
    } else {
      return false;
    }
}

const updateScore = (s) => {
    if (s === "human") {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1;
}
