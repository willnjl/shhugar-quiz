import React from "react";

export default function Item({ item }) {
  return (
    <div className="wrap-tight">
      <div className="block item">
        <img src={item.imgUrl} alt="" />
      </div>
    </div>
  );
}
