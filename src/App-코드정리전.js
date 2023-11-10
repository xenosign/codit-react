import { useState } from "react";
import Board from "./Board";
import Button from "./Button";

function random() {
  return Math.ceil(Math.random() * 6);
}

function App() {
  const [blueNum, setBlueNum] = useState(1);
  const [blueSum, setBlueSum] = useState(0);
  const [blueGameHistory, setBlueGameHistory] = useState([]);

  const [redSum, setRedSum] = useState(0);
  const [redNum, setRedNum] = useState(1);
  const [redGameHistory, setRedGameHistory] = useState([]);

  const handleThrowDice = () => {
    const nextBlueNum = random();
    const nextRedNum = random();

    setBlueNum(nextBlueNum);
    setBlueSum(blueSum + nextBlueNum);
    setBlueGameHistory([...blueGameHistory, nextBlueNum]);

    setRedNum(nextRedNum);
    setRedSum(redSum + nextRedNum);
    setRedGameHistory([...redGameHistory, nextRedNum]);
  }

  const handleClearClick = () => {
    setBlueNum(1);
    setBlueSum(0);
    setBlueGameHistory([]);

    setRedNum(1);
    setRedSum(0);
    setRedGameHistory([]);
  };

  return (
    <>
      <div>
        <Button onClick={handleThrowDice}>던지기</Button>
        <Button onClick={handleClearClick}>초기화</Button>
      </div>
      <div>
        <Board name="나" color="blue" num={blueNum} sum={blueSum} gameHistory={blueGameHistory} />
        <Board name="상대" color="red" num={redNum} sum={redSum} gameHistory={redGameHistory} />
      </div>
    </>
  );
}

export default App;
