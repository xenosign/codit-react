import React from 'react'

// 하위 컴포넌트의 결과 값을 인자로 상위 컴포넌트에 올리는 구조를 가지는 컴포넌트
export default function Test({ onClick }) {
  const rand = Math.ceil(Math.random() * 6);

  const handleClick = () => {
    console.log(rand);
    onClick(rand);
  }

  return (
    <button onClick={handleClick}>상위 컴포넌트로 데이터 넘기기</button>
  )
}
