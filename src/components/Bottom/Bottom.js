import React from "react";
import Result from "../Result";
import AnswerInput from "../AnswerInput";
import Question from "../Question";

export default function Bottom({ hasAnswered }) {
  return (
    <div className={"bottom"}>
      {hasAnswered ? (
        <Result />
      ) : (
        <>
          <Question />
          <AnswerInput />
        </>
      )}
    </div>
  );
}
