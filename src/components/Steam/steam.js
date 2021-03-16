import React, { useEffect } from "react";
import STEAM from "../../assets/STEAM.png";

const Steam = () => {
  return (
    <img
      src={STEAM}
      className={"animated-steam animate-flicker"}
      id={"steam"}
    />
  );
};

export default Steam;
