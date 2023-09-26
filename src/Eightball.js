import React from "react";
import { useState } from "react";

/** Displays Initial 8 Ball question, on click gives answer
 *
 * Props:
 * - answers (array of Objects w/ keys of msg and color)
 * TODO: write out explicitly the answers array
 *
 * States:
 * - color: starts as black, updates to answers.color
 * - text: starts as "Think of a Question", updates to answers.msg
 */
function Eightball({ answers }) {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("Think of a Question");
  //TODO: useState on answer object containing properties color, text

  function handleClick() {
    const answer = answers[Math.floor(Math.random() * answers.length)];
    setText(answer.msg);
    setColor(answer.color);
  }

  return (
    <button
      className="Eightball"
      style={{ backgroundColor: color, color: "white" }}
      onClick={handleClick}>
      {text}
    </button >
  );
}

export default Eightball;