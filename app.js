const compareGuesses = (hGuess, cGuess) => {
    let generateTarget = () => {
        return Math.floor(Math.random() * 10);
    }

    // generate random number
    const randomNumber = generateTarget();
    console.log(randomNumber);

    // calculate difference between guesses and random number
    const difHum = Math.abs(randomNumber - Number(hGuess));
    const difComp = Math.abs(randomNumber - Number(cGuess));

    if (difHum > difComp) return true;
    else if (difComp > difHum) return false;
    else if (difComp === difHum) return true;
}

const updateScore = (compareGuesses) => {

}

