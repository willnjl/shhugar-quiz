import React from "react";
import STEAM from "../../assets/STEAM.png";

const Steam = () => {
  return (
    <img
      src={STEAM}
      className={"animated-steam animate-flicker"}
      id={"steam"}
      alt="steam"
    />
  );
};

export default Steam;
