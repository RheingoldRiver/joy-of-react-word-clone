import Banner from '../Banner/Banner';

function Input({value, processInput, processGuess, endOfGame, currentIndex, answer}) {
  return <form className="guess-input-wrapper" onSubmit={processGuess}>
    <label htmlFor="word-input">Enter guess:</label>
    {endOfGame === "" ?
    <input id="word-input" type="text" value={value} onChange={processInput}/> :
    <Banner endResult={endOfGame} currentIndex={currentIndex} answer={answer}></Banner>}
  </form>;
}

export default Input;
