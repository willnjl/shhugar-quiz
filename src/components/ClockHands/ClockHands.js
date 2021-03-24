import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { gsap } from "gsap";

const ClockHands = ({ hasAnswered }) => {
  let handleHover = (tween, id) => {
    if (!hands[id]) {
      tween.restart();
      hands[id] = true;
      tween.eventCallback("onComplete", () => {
        hands[id] = false;
      });
    }
  };
  const [hands, setHands] = useState({
    1: false,
    2: false,
    3: false,
  });
  let tween1;
  let tween2;
  let tween3;
  useEffect(() => {
    tween1 = gsap
      .to(".animated-secs", {
        rotate: 360,
        duration: 7,
      })
      .pause();
    tween2 = gsap
      .to(".animated-mins", {
        rotate: 360,
        duration: 2,
      })
      .pause();

    tween3 = gsap
      .to(".animated-hours", {
        rotate: 360,
        duration: 4,
      })
      .pause();
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
