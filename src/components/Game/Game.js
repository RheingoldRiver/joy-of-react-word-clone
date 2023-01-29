import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input';
import BoardRow from '../BoardRow';
import React from 'react';
import {checkGuess} from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [input, setInput] = React.useState("");
  const [guess, setGuess] = React.useState("");
  const [guesses, setGuesses] = React.useState(range(NUM_OF_GUESSES_ALLOWED).map(i=>{ return {
    word: "",
    results: [],
    key:crypto.randomUUID()
  }}));
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
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
    console.log(checkGuess(newGuess, answer));
    newGuesses[currentIndex].results = checkGuess(newGuess, answer);
    setCurrentIndex(currentIndex + 1);
    setGuesses(newGuesses);
  }
  return (
    <div className="game-wrapper">
    <div className="guess-results">
    {guesses.map(({word, results, key})=><BoardRow word={word} results={results} key={key}></BoardRow>)}
    </div>
  <Input value={input} processInput={processInput} processGuess={processGuess}></Input>
  </div>);
}

export default Game;
