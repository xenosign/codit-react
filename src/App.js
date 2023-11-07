import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";
import Test from "./Test";

function random() {
  return Math.ceil(Math.random() * 6);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const handleThrowDice = () => {
    const nextNum = random();
    setNum(nextNum);
    setSum(sum + nextNum);
    setGameHistory([...gameHistory, nextNum]);
  };

  // 하위 컴포넌트의 결과 값을 인자로 받아서 반영하는 함수
  const handleDiceFromSubComponent = (nextNum) => {
    const nextDice = nextNum;
    setNum(nextDice);
    setSum(sum + nextDice);
    setGameHistory([...gameHistory, nextDice]);
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
  };

  return (
    <>
      <div>
        <Button onClick={handleThrowDice}>던지기</Button>
        <Button onClick={handleClearClick}>초기화</Button>
        <Test onClick={handleDiceFromSubComponent} />
      </div>
      <div>
        <Dice color="red" num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        <p>{gameHistory.join(",")}</p>
      </div>
    </>
  );
}

export default App;
