import React from "react";

export default function AnswerInput({ quiz, handleClick, handleSubmit }) {
  return (
    <div className={"block answer-block"}>
      <div className="wrap-tight flex-col">
        <div className={"btns-container"}>
          <button
            disabled={quiz.guess < 1}
            className={"btn btn-increment"}
            onClick={() => handleClick(-1)}
          >
            -
          </button>
          <div className={"answer"}>{quiz.guess}</div>
          <button
            disabled={quiz.guess > 49}
            className={"btn btn-increment"}
            onClick={() => handleClick(1)}
          >
            +
          </button>
        </div>
        <button className={"btn btn-submit"} onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
    </div>
  );
}
