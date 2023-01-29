import { range } from "../../utils";
import Cell from "../Cell"

function BoardRow({word, results}) {
  return <div className="guess">
    {range(5).map((c, i) => <Cell letter={word.split("")[c]} status={results[i]} key={i}/>)}
  </div>;
}

export default BoardRow;
