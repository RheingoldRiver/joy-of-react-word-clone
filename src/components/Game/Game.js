import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input';
import BoardRow from '../BoardRow';
import Keyboard from '../Keyboard'
import React from 'react';
import {checkGuess} from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [input, setInput] = React.useState("");
  const [, setGuess] = React.useState("");
  const [guesses, setGuesses] = React.useState(range(NUM_OF_GUESSES_ALLOWED).map(i=>{ return {
    word: "",
    results: [],
    id:crypto.randomUUID()
  }}));
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [endOfGame, setEndOfGame] = React.useState("");
    const [letters, setLetters] = React.useState({
    A: "incorrect",
    B: "incorrect",
    C: "incorrect",
    D: "incorrect",
    E: "incorrect",
    F: "incorrect",
    G: "incorrect",
    H: "incorrect",
    I: "incorrect",
    J: "incorrect",
    K: "incorrect",
    L: "incorrect",
    M: "incorrect",
    N: "incorrect",
    O: "incorrect",
    P: "incorrect",
    Q: "incorrect",
    R: "incorrect",
    S: "incorrect",
    T: "incorrect",
    U: "incorrect",
    V: "incorrect",
    W: "incorrect",
    X: "incorrect",
    Y: "incorrect",
    Z: "incorrect",
  })
  
  let processInput = (e) => {
    setInput(e.target.value);
  };
  let processGuess = (e) => {
    e.preventDefault();
    if (input.length !== 5) {
      alert("Invalid string! Length must be exactly 5.");
      return;
    }
    let newGuess = input.toUpperCase();
    setGuess(newGuess);
    setInput('');
    let newGuesses = [...guesses];
    newGuesses[currentIndex].word = newGuess;
    const results = checkGuess(newGuess, answer);
    const netResult = results.reduce((c, r) => {
      return r === "correct" ? c + 1 : c;
    }, 0);
    let newLetters = {...letters};
    for (let i in newGuess.split('')) {
      newLetters[newGuess[i]] = results[i];
    }
    setLetters(newLetters);
    newGuesses[currentIndex].results = results;
    if (netResult === 5) {
      setEndOfGame("happy");
      return;
    }
    setCurrentIndex(currentIndex + 1);
    if (currentIndex >= NUM_OF_GUESSES_ALLOWED - 1) {
      // We already know they didn't win
      // numbering offset because of 0-indexing
      setEndOfGame("sad");
    }
    setGuesses(newGuesses);
  }
  return (
    <div className="game-wrapper">
    <div className="guess-results">
    {guesses.map(({word, results, id})=><BoardRow word={word} results={results} id={id} key={id}></BoardRow>)}
    </div>
  <Input value={input} processInput={processInput} processGuess={processGuess} endOfGame={endOfGame} currentIndex={currentIndex} answer={answer}></Input>
          <Keyboard letters={letters}/>
  </div>);
}

export default Game;
