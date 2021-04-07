import React, { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

export default function Item({ q }) {
  const [loaded, setLoaded] = useState(false);
  useLayoutEffect(() => {
    setLoaded(false);
  }, [q]);

  const onLoad = () => {
    let rotate = Math.random() * 50;
    setLoaded(true);
    let tween = gsap.from("#item", {
      rotate,
      scale: 1.5,
      ease: "bounce",
      duration: 1.2,
      yoyo: true,
    });
  };
  return (
    <div className="wrap-tight">
      <div className="block item">
        <img
          src={q.imgUrl}
          alt={q.messages.question}
          id={"item"}
          onLoad={() => onLoad()}
          style={!loaded ? { opacity: 0 } : {}}
        />
      </div>
      {!loaded && (
        <div className={"loading"}>
          <h1>loading </h1>
        </div>
      )}
    </div>
  );
}
