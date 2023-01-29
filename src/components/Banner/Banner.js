import HappyText from "../HappyText/HappyText";
import SadText from "../SadText"

function Banner({endResult, currentIndex=undefined, answer=undefined}) {
  return <div className={`banner ${endResult}`}>
    <p>
      {endResult === "happy" ? <HappyText currentIndex={currentIndex}/> : <SadText answer={answer}/>}
    </p>
  </div>;
}

export default Banner;
