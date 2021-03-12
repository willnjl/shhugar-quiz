import React from "react";
import TitleBlock from "../TitleBlock";
import Item from "../Item";
import AnswerInput from "../AnswerInput";
import Question from "../Question";
function App() {
  return (
    <main className={"site-main"}>
      <div className="wrap">
        <TitleBlock />
        <Item />
        <Question />
        <AnswerInput />
      </div>
    </main>
  );
}

export default App;
