function CheatMode({ cheatMode, setCheatMode }) {
  return (
    <div className="cheat-mode-wrapper">
      <label htmlFor="cheat-mode-toggle">
        Cheat mode{" "}
        <input
          type="checkbox"
          id="cheat-mode-toggle"
          name="cheatmode"
          value={cheatMode}
          onChange={(e) => {
            setCheatMode(e.target.checked);
          }}
        ></input>
      </label>
    </div>
  );
}

export default CheatMode;
