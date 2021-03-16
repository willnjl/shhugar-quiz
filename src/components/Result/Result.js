import React, { useEffect } from "react";
import { gsap } from "gsap";

let setGrams = (n) => {
  return n * 4;
};

let setPercentage = (n, rdi) => {
  let grams = n * 4;
  return ((grams / rdi) * 100).toFixed(1);
};

export default function Result({
  q,
  quiz,
  handleNext,
  hasAnswered,
  recordScore,
}) {
  let handleClick = () => {
    handleNext();
    recordScore({ q, pass: quiz.pass });
  };

  useEffect(() => {
    if (hasAnswered) {
      let tween = gsap.from("#mark", {
        scale: 0.2,
        duration: 0.3,
        ease: "power",
        rotate: (Math.random() + 1) * 5,
      });
    }
  }, []);

  return (
    <div className={"window result-block"} id={"window"}>
      <div className={"x"}>
        <h3>
          You are{" "}
          <span className={quiz.pass ? "green" : "purple"} id={"mark"}>
            {quiz.pass ? "correct" : "wrong"}
          </span>
          !
        </h3>
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
        <button className={`btn btn-next`} onClick={() => handleClick()}>
          next question
        </button>
      </div>
    </div>
  );
}
