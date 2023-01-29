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
  
  </div>);
}

export default Game;
