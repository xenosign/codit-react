import Dice from "./Dice";

const boxStyle = {
  display: 'inline-block',
  padding: '50px 60px',
  borderRadius: '30px',
  backgroundColor: 'rgba(117, 117, 117, 0.1)',
}

function Board({ name, color, gameHistory }) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);

  console.log(num);

  return (
    <>
      <div style={boxStyle}>
        <h2>{name}</h2>
        <Dice color={color} num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        <p>{gameHistory.join(",")}</p>
      </div>
    </>
  );
}

export default Board;
