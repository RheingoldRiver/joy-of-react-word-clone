import Game from "../Game";
import Header from "../Header";
import CheatMode from "../CheatMode/CheatMode";
import React from "react";

function App() {
  const [cheatMode, setCheatMode] = React.useState(() => {
    return (window.localStorage.getItem("cheat-mode") ?? "false") === "true";
  });
  let gameClass = "game-wrapper";
  if (cheatMode) {
    gameClass += " cheat-mode";
  } else {
    gameClass += " honest-mode";
  }
  return (
    <div className="app-container">
      <div className="wrapper">
        <Header />

        <div className={gameClass}>
          <Game cheatMode={cheatMode} />
        </div>
      </div>
      <CheatMode cheatMode={cheatMode} setCheatMode={setCheatMode} />
    </div>
  );
}

export default App;
