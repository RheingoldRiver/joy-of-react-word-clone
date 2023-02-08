import Game from "../Game";
import Header from "../Header";
import CheatMode from "../CheatMode/CheatMode";
import React from "react";
import TotalScore from "../TotalScore/TotalScore";

function App() {
  const [cheatMode, setCheatMode] = React.useState(() => {
    return (window.localStorage.getItem("cheat-mode") ?? "false") === "true";
  });

  const [totalWins, setTotalWins] = React.useState(() => {
    return window.localStorage.getItem("total-wins") ?? 0;
  });
  const [totalLosses, setTotalLosses] = React.useState(() => {
    return window.localStorage.getItem("total-losses") ?? 0;
  });

  function onWin() {
    const newTotalWins = totalWins + 1;
    setTotalWins(newTotalWins);
    window.localStorage.setItem("total-wins", newTotalWins);
  }

  function onLoss() {
    const newTotalLosses = totalLosses + 1;
    setTotalLosses(newTotalLosses);
    window.localStorage.setItem("total-wins", newTotalLosses);
  }

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
        <TotalScore totalWins={totalWins} totalLosses={totalLosses}></TotalScore>

        <div className={gameClass}>
          <Game cheatMode={cheatMode} onWin={onWin} onLoss={onLoss} />
        </div>
      </div>
      <CheatMode cheatMode={cheatMode} setCheatMode={setCheatMode} />
    </div>
  );
}

export default App;
