export function checkGuess(guess, answer) {
  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split("");
  const answerChars = answer.split("");

  return guessChars.map((guessChar, index) => {
    const answerChar = answerChars[index];

    let status;
    if (guessChar === answerChar) {
      status = "correct";
    } else if (answerChars.includes(guessChar)) {
      status = "misplaced";
    } else {
      status = "incorrect";
    }
    return status;
  });
}

export const PLACEMENT_VALUES = {
  incorrect: 0,
  misplaced_cheating: 1,
  misplaced: 2,
  correct: 3,
};

export function updateLetters(letters, letter, result) {
  const currentScore = PLACEMENT_VALUES[letters[letter]];
  if (currentScore > PLACEMENT_VALUES[result]) return;
  letters[letter] = result;
}
