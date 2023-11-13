import { useState } from "react";
import Board from "./Board";
import Button from "./Button";

function random(max) {
  return Math.ceil(Math.random() * max);
}

// history 마지막 수만 알면 다 구할 수 있으니, 변경하자
function App() {
  const [blueGameHistory, setBlueGameHistory] = useState([]);
  const [redGameHistory, setRedGameHistory] = useState([]);

  const handleThrowDice = () => {
    const max = 6;
    const nextBlueNum = random(max);
    const nextRedNum = random(max);

    console.log(nextBlueNum, nextRedNum)

    setBlueGameHistory([...blueGameHistory, nextBlueNum]);
    setRedGameHistory([...redGameHistory, nextRedNum]);
  };

  const handleClearClick = () => {
    setBlueGameHistory([]);
    setRedGameHistory([]);
  };

  return (
    <>
      <div>
        <Button color='blue' onClick={handleThrowDice}>던지기</Button>
        <Button color='red' onClick={handleClearClick}>초기화</Button>
      </div >
      <div>
        <Board name="나" color="blue" gameHistory={blueGameHistory} />
        <Board name="상대" color="red" gameHistory={redGameHistory} />
      </div>
    </>
  );
}

export default App;
