import React from "react";

let setGrams = (n) => {
  return n * 4;
};

let setPercentage = (n, rdi) => {
  let grams = n * 4;
  return ((grams / rdi) * 100).toFixed(1);
};

let setTitle = (result) => {
  return result ? (
    <h3>
      You are <span className={"green"}>correct</span>!
    </h3>
  ) : (
    <h3>
      You are <span className={"purple"}>wrong</span>!
    </h3>
  );
};
export default function Result({ q, quiz, handleNext }) {
  return (
    <div className={"window result-block"}>
      <div className={"x"}>
        {setTitle(quiz.pass)}

        <p>
          The answer is
          <span className={"correct-answer"}>
            {Math.round(q.answer)}
          </span> or {setGrams(q.answer)} grams*
        </p>

        <p>
          which makes this {q.messages.question}{" "}
          <strong>{setPercentage(q.answer, quiz.rdi).toString()}%</strong> of
          your daily recommended sugar intake
        </p>
        <button className={"btn btn-next"} onClick={() => handleNext()}>
          next question
        </button>
      </div>
    </div>
  );
}
