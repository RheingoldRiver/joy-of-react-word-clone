import Key from "../Key/Key";

function KeyboardRow({ row, letters }) {
  return (
    <div className="keyboard-row">
      {row.map((letter, i) => (
        <Key key={i} status={letters[letter]}>
          {letter}
        </Key>
      ))}
    </div>
  );
}

export default KeyboardRow;
