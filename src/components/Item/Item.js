import React from "react";
import { gsap } from "gsap";

gsap.to("#item", {
  rotation: 15,
  duration: 1,
  yoyo: true,
  repeat: -1,
});
export default function Item({ item }) {
  return (
    <div className="wrap-tight">
      <div className="block item">
        <img src={item.imgUrl} alt="" id={"item"} />
      </div>
    </div>
  );
}
