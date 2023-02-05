import Key from "../Key/Key";

function KeyboardRow({ row, letters, updateLetter, cheatMode }) {
  return (
    <div className="keyboard-row">
      {row.map((letter, i) => (
        <Key key={i} status={letters[letter]} letter={letter} updateLetter={updateLetter} cheatMode={cheatMode} />
      ))}
    </div>
  );
}

export default KeyboardRow;
