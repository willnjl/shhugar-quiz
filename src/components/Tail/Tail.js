import React, { useEffect } from "react";
import TAIL from "../../assets/TAIL.png";
import { gsap } from "gsap";

const Tail = () => {
  const tl = gsap.timeline({
    repeat: -1,
    yoyoEase: true,
    ease: "elastic",
    // repeatDelay: 25,
  });
  useEffect(() => {
    tl.to("#tail", {
      rotate: 20,
      duration: 3,
    });
  }, []);
  return <img src={TAIL} className={"animated-tail"} id={"tail"} />;
};

export default Tail;
