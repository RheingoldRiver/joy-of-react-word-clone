function Input({ value, processInput, processGuess, endOfGame }) {
  return (
    <form className="guess-input-wrapper" onSubmit={processGuess}>
      <label htmlFor="word-input">Enter guess:</label>
      <input
        id="word-input"
        disabled={endOfGame}
        type="text"
        value={value}
        onChange={processInput}
        data-lplignore="true"
        style={{
          opacity: `${endOfGame ? 0.4 : 1}`,
        }}
      />
    </form>
  );
}

export default Input;
