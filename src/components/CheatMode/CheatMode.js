function CheatMode({ cheatMode, setCheatMode }) {
  return (
    <div className="cheat-mode-wrapper">
      <label htmlFor="cheat-mode-toggle">
        Cheat mode{" "}
        <input
          type="checkbox"
          id="cheat-mode-toggle"
          name="cheatmode"
          checked={cheatMode}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setCheatMode(isChecked);
            window.localStorage.setItem("cheat-mode", isChecked);
          }}
        ></input>
      </label>
    </div>
  );
}

export default CheatMode;
