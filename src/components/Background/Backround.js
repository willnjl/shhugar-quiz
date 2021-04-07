import React from "react";
import Tail from "../Tail/Tail";
import Steam from "../Steam/steam";
import ClockHands from "../ClockHands/ClockHands";

const Backround = () => {
  return (
    <>
      <div className={"background"}>
        <div classname="background-overlay">
          <Tail />
          <Steam />
          <ClockHands />
        </div>
      </div>
    </>
  );
};

export default Backround;
