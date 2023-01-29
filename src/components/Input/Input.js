function Input({value, processInput, processGuess, endOfGame}) {
  return <form className="guess-input-wrapper" onSubmit={processGuess}>
    <label htmlFor="word-input">Enter guess:</label>
    {endOfGame === "" ?
    <input id="word-input" type="text" value={value} onChange={processInput}/> :
    ""}
  </form>;
}

export default Input;
