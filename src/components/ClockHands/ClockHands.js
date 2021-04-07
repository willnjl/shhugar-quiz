import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { gsap } from "gsap";

const ClockHands = () => {
  const [hands] = useState({
    1: false,
    2: false,
    3: false,
  });
  let handleHover = (tween, id) => {
    if (!hands[id]) {
      tween.restart();
      tween.play();
      hands[id] = true;
      tween.eventCallback("onComplete", () => {
        hands[id] = false;
      });
    }
  };
  let tween1 = gsap.timeline();
  let tween2 = gsap.timeline();
  let tween3 = gsap.timeline();

  useEffect(() => {
    tween1.to(".animated-secs", {
      rotate: 360,
      duration: 7,
    });

    tween2.to(".animated-mins", {
      rotate: 360,
      duration: 2,
    });

    tween3.to(".animated-hours", {
      rotate: 360,
      duration: 4,
    });
  }, []);
  return (
    <>
      <div
        className={"animated-secs"}
        onMouseEnter={() => handleHover(tween1, 1)}
      ></div>
      <div
        className={"animated-mins"}
        onMouseEnter={() => handleHover(tween2, 2)}
      ></div>
      <div
        className={"animated-hours"}
        onMouseEnter={() => handleHover(tween3, 3)}
      ></div>
      <div className={"animated-center"}></div>
    </>
  );
};

let mapStateToProps = ({ player }) => ({ hasAnswered: player.hasAnswered });

export default connect(mapStateToProps)(ClockHands);
