function Key({ status, letter, updateLetter, cheatMode }) {
  let className = status ? `keyboard-cell ${status}` : "keyboard-cell";
  return (
    <form
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        updateLetter(letter);
      }}
    >
      <button className={className} disabled={!cheatMode}>
        {letter}
      </button>
    </form>
  );
}

export default Key;
