import React, { useEffect } from "react";
import { connect } from "react-redux";
import { gsap } from "gsap";

const ClockHands = ({ hasAnswered }) => {
  useEffect(() => {
    let tween = gsap.to(".animated-mins", {
      rotate: 360,
      duration: 60,
      repeat: -1,
    });
    let tween2 = gsap.to(".animated-secs", {
      rotate: 360,
      duration: 60,
      repeat: -1,
      ease: "none",
    });
    let tween3 = gsap.to(".animated-hours", {
      rotate: 360,
      duration: 144,
      repeat: -1,
    });
  }, []);
  return (
    <>
      <div className={"animated-mins"}></div>
      <div className={"animated-secs"}></div>
      <div className={"animated-hours"}></div>
      <div className={"animated-center"}></div>
    </>
  );
};

let mapStateToProps = ({ player }) => ({ hasAnswered: player.hasAnswered });

export default connect(mapStateToProps)(ClockHands);
