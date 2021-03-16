import React, { useState, useEffect } from "react";
import TitleBlock from "../TitleBlock";
import Item from "../Item";
import Bottom from "../Bottom";
import Menu from "../Menu";
function App() {
  return (
    <main className={"site-main"}>
      <div className="wrap">
        <div className="flex-col game-area ">
          <TitleBlock />
          <Menu>
            <Item />
            <Bottom />
            <span className="asterix">
              *different brands will vary in sugar content, for guidance only
            </span>
          </Menu>
        </div>
      </div>
    </main>
  );
}

export default App;
