// 가위바위보 승패 코드

// 이기는 방식을 객체 형태로 선언
const WINS = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패배";
  return "무승부";
}

// 들어온 2개 값을 비교해서 a 가 wins 를 따르면 승, b 가 wins 를 따르면 패, 둘 다 아니면 무승부로 철
export function compareHand(a, b) {
  if (WINS[a] === b) return 1;
  if (WINS[b] === a) return -1;
  return 0;
}

getResult("scissor", "rock");
