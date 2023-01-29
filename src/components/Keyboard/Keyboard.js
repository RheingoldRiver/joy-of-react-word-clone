import { KEYBOARD_LEETERS } from "../../data";
import KeyboardRow from "../KeyboardRow"

function Keyboard({letters}) {
  return <div className="keyboard-container">
    {KEYBOARD_LEETERS.map((row, i) =><KeyboardRow row={row} letters={letters} key={i}></KeyboardRow>)}
  </div>;
}

export default Keyboard;
