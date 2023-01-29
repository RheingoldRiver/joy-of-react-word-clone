function Input({value, processInput, processGuess}) {
  return <form onSubmit={processGuess}>
    <label htmlFor="word-input">Enter guess:</label>
    <input id="word-input" type="text" value={value} onChange={processInput}/>
  </form>;
}

export default Input;
