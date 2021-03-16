import React, { useState, useEffect } from "react";
import TitleBlock from "../TitleBlock";
import Item from "../Item";
import Bottom from "../Bottom";
import Menu from "../Menu";
import Tail from "../Tail/Tail";
import Steam from "../Steam/steam";
import Summary from "../Summary";
import { gsap } from "gsap";
function App({ quiz }) {
  const { completed } = quiz;
  return (
    <main className={"site-main"}>
      <div className="wrap">
        <div className="flex-col game-area ">
          <TitleBlock />
          {completed ? (
            <Summary />
          ) : (
            <Menu>
              <Item />
              <Bottom />
              <span className="asterix">
                *different brands will vary in sugar content, for guidance only
              </span>
            </Menu>
          )}
        </div>
        <Tail />
        <Steam />
      </div>
    </main>
  );
}

export default App;
