import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const WINS = ["scissor", "paper", "rock"];

function getResult(right) {
  const left = Math.floor(Math.random() * 3);
  if (WINS[left] === right) return console.log("무승부");
  else if (WINS[left] === "scissor") {
    if (right === "paper") return console.log("승리");
    return console.log("패배");
  } else if (WINS[left] === "paper") {
    if (right === "rock") return console.log("승리");
    return console.log("패배");
  } else if (WINS[left] === "rock") {
    if (right === "scissor") return console.log("승리");
    return console.log("패배");
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>가위바위보</h1>
    <button onClick={() => getResult("scissor")}>가위</button>
    <button onClick={() => getResult("rock")}>바위</button>
    <button onClick={() => getResult("paper")}>보</button>
  </>
);
