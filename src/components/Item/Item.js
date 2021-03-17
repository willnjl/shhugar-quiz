import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function Item({ q }) {
  let rotation = Math.random() + 1 * 4;
  // useEffect(() => {
  //   // let tween = gsap.from("#item", {
  //   //   rotate: rotation,
  //   //   scale: 1.5,
  //   //   ease: "bounce",
  //   //   duration: 1.2,
  //   //   yoyo: true,
  //   // });
  // }, []);
  return (
    <div className="wrap-tight">
      <div className="block item">
        <img
          src={q.imgUrl}
          alt=""
          id={"item"}
          onLoad={() => {
            console.log("load");
            gsap.from("#item", {
              rotate: rotation,
              scale: 1.5,
              ease: "bounce",
              duration: 1.2,
              yoyo: true,
            });
          }}
        />
      </div>
    </div>
  );
}
