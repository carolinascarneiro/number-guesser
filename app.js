let generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (hGuess, cGuess, generateTarget) => {

    // generate random number
      const randomNumber = generateTarget();
      console.log(randomNumber);

    // calculate difference between hGuess and randomNumber
      const difHum = Math.abs(randomNumber - Number(hGuess));

    // calculate difference between cGuess and randomNumber
      const difComp = Math.abs(randomNumber - Number(cGuess));
      difHum > difComp ? console.log('Computer won') : ('Human won');
      difComp > difHum ? console.log('Human won') : ('Computer won');
      if (difComp === difHum) {console.log('Human won')};
  }
  
compareGuesses(1, 2)