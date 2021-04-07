import React from "react";

export default function Question({ question }) {
  return (
    <div className={"question-block"}>
      <p>
        {"Can you guess the number of sugar cubes in this "}
        {question.messages.size}
        {" of "}
        <strong>{question.messages.question}</strong>
        {"?"}
      </p>
    </div>
  );
}
