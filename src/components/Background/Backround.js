import React from "react";
import Tail from "../Tail/Tail";
import Steam from "../Steam/steam";
import ClockHands from "../ClockHands/ClockHands";
import background from "../../assets/background.jpg";
const Backround = ({}) => {
  return (
    <>
      <div className={"background"}>
        <div class="background-overlay">
          <Tail />
          <Steam />
          <ClockHands />
        </div>
      </div>
    </>
  );
};

export default Backround;
