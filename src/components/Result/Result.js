import React from "react";

let setPercentage = (n) => {
  return ((n / 30) * 100).toFixed(1);
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
    <div className={"block result-block"}>
      <div className={"wrap-tight flex-col"}>
        {setTitle(quiz.pass)}
        <p>
          The answer is <span className={"correct-answer"}>{q.answer}</span>
        </p>

        <p>
          From the age of 11, we should be consuming{" "}
          <strong>no more than 30g</strong> of free sugar{" "}
          <span>(7 cubes of sugar)</span> per day, which makes this{" "}
          <strong>{q.messages.question}</strong>{" "}
          {setPercentage(q.answer).toString()}% of your daily recommended sugar
          intake
        </p>
        <button className={"btn btn-next"} onClick={() => handleNext()}>
          next question
        </button>
      </div>
    </div>
  );
}
