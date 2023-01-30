import HappyText from "../HappyText/HappyText";
import SadText from "../SadText";

function Banner({ endResult, currentIndex, answer, resetGame }) {
  return (
    <div className={`banner ${endResult}`}>
      <p>{endResult === "happy" ? <HappyText currentIndex={currentIndex} /> : <SadText answer={answer} />}</p>
      <form id="new-game-form" onSubmit={resetGame}>
        <label htmlFor="new-game">Want to play a new game? </label>
        <button id="new-game" className="new-game-button">
          OK!
        </button>
      </form>
    </div>
  );
}

export default Banner;
