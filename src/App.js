import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";
import Test from "./Test";

function random() {
  return Math.ceil(Math.random() * 6);
}

function App() {
  const [num, setNum] = useState(1);

  const handleThrowDice = () => {
    const nextNum = random();
    setNum(nextNum);
  }

  // 하위 컴포넌트의 결과 값을 인자로 받아서 반영하는 함수
  const handleDiceFromSubComponent = (nextNum) => {
    const nextDice = nextNum;
    setNum(nextDice);
  }

  return (
    <>
      <div>
        <Button onClick={handleThrowDice}>던지기</Button>
        <Button>초기화</Button>
        <Test onClick={handleDiceFromSubComponent} />
      </div>
      <Dice color="red" num={num} />
    </>
  );
}

export default App;
