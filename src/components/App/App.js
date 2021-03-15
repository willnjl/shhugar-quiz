import React, { useState } from "react";
import TitleBlock from "../TitleBlock";
import Item from "../Item";
import AnswerInput from "../AnswerInput";
import Question from "../Question";
import Result from "../Result";
function App({ quiz, player }) {
  return (
    <main className={"site-main"}>
      <div className="wrap">
        <div className="flex-col game-area ">
          <TitleBlock />
          <Item />
          <div className={"bottom"}>
            {player.hasAnswered ? (
              <Result />
            ) : (
              <>
                <Question />
                <AnswerInput />
              </>
            )}
          </div>
          <span className="asterix">
            *different brands will vary in sugar content, for guidance only
          </span>
        </div>
      </div>
    </main>
  );
}

export default App;
