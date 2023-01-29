import { sample, guessList } from '../../utils';
import { WORDS, DEFAULT_LETTERS } from '../../data';
import Input from '../Input';
import BoardRow from '../BoardRow';
import Keyboard from '../Keyboard'
import React from 'react';
import {checkGuess} from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';

function Game() {
  const [input, setInput] = React.useState("");
  const [, setGuess] = React.useState("");
  
  // Game State
  const [guesses, setGuesses] = React.useState(guessList());
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [endOfGame, setEndOfGame] = React.useState("");
  const [letters, setLetters] = React.useState(DEFAULT_LETTERS);
  const [answer, setAnswer] = React.useState(sample(WORDS));
  
  // console.log(answer);
  
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
  
  let resetGame = (e)=>{
    e.preventDefault();
    setAnswer(sample(WORDS));
    setGuesses(guessList());
    setCurrentIndex(0);
    setEndOfGame('');
    setLetters(DEFAULT_LETTERS);
    }
  
  return (
    <div className={`game-wrapper ${endOfGame}`}>
    <div className="guess-results">
    {guesses.map(({word, results, id})=><BoardRow word={word} results={results} id={id} key={id}></BoardRow>)}
    </div>
  <Input value={input} processInput={processInput} processGuess={processGuess} endOfGame={endOfGame} currentIndex={currentIndex} answer={answer} resetGame={resetGame}></Input>
    {endOfGame === "" ? "" : <Banner endResult={endOfGame} currentIndex={currentIndex} answer={answer} resetGame={resetGame}></Banner>}
          <Keyboard letters={letters}/>
  </div>);
}

export default Game;
