import { range } from "../../utils";
import Cell from "../Cell"

function BoardRow({word, results, id}) {
  return <div className="guess" key={id}>
    {range(5).map((c, i) => <Cell letter={word.split("")[c]} status={results[i]} id={i} key={i}/> )}
  </div>;
}

export default BoardRow;
