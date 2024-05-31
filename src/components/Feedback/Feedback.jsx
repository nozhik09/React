import Button from "../Button/Button";
import { useState } from "react";
import "./styles.css";
function Feedback() {
  const [count, setCount] = useState(0);
  const [disl, setDis] = useState(0);

  const like = () => {
    setCount((like) => like + 1);
  };

  const dislike = () => {
    setDis((dis) => dis - 1);
  };

  const resetResults = () => {
    setCount((l) => (l = 0));
    setDis((l) => (l = 0));
  };

  return (
    <div className="feedback_container">
      <Button name="like" onClick={like} />
      <div>{count}</div>
      <Button name="dislike" onClick={dislike} />
      <div>{disl}</div>
      <Button name="Reset Results" onClick={resetResults} />
    </div>
  );
}

export default Feedback;
