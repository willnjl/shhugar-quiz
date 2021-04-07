import React, { useState, useEffect } from "react";
import TitleBlock from "../TitleBlock";
import Item from "../Item/Item";
import Bottom from "../Bottom";
import Menu from "../Menu";
import Background from "../Background/Backround";
import Summary from "../Summary";
import { gsap } from "gsap";

function App({ quiz }) {
  const { completed, currentQuestion, questions } = quiz;
  return (
    <>
      <main className={"site-main"}>
        <Background />
        <div className="wrap">
          <div className="flex-col game-area ">
            <TitleBlock />
            {completed ? (
              <Summary />
            ) : (
              <Menu>
                <Item q={questions[currentQuestion]} />
                <Bottom />
                <span className="asterix">
                  *different brands will vary in sugar content, for guidance
                  only
                </span>
              </Menu>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
