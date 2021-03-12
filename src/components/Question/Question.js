import React from "react";

export default function Question({ question }) {
  return (
    <div>
      <p>
        {"Can you guess the number of sugar cubes in this "}
        {question.messages.question}
      </p>
    </div>
  );
}
