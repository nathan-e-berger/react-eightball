import React from "react";
import { useState } from "react";

function Eightball({ answers }) {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("Think of a Question");

  function handleClick() {
    const answer = answers[Math.floor(Math.random() * answers.length)];
    setText(answer.msg);
    setColor(answer.color);
  }

  return <button onClick={handleClick}>{text}</button >;
}

export default Eightball;