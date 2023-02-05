import React from "react";

function Key({ status, letter, updateLetter, cheatMode }) {
  const letterId = React.useId();
  let className = status ? `keyboard-cell ${status}` : "keyboard-cell";
  return (
    <form
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        updateLetter(letter);
      }}
      className={className}
      data-lpignore="true"
    >
      <button id={letterId} disabled={!cheatMode} data-lpignore="true" className="keyboard-letter">
        {letter}
      </button>
    </form>
  );
}

export default Key;
