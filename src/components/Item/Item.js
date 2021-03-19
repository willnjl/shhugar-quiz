import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Item({ q }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    console.log(loaded);
  }, [q]);

  const onLoad = () => {
    console.log({ url: q.imgUrl });
    let rotation = Math.random() + 1 * 5;
    setLoaded(true);
    let tween = gsap.from("#item", {
      rotate: rotation,
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
          alt=""
          id={"item"}
          onLoad={() => onLoad()}
          style={!loaded ? { display: "none" } : {}}
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
