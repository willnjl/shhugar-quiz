import React, { useState } from "react";

export default function Menu({ inProgress, children, handleStart }) {
  const [rdi, setRdi] = useState(30);

  let handleChange = (e) => {
    setRdi(e.currentTarget.value);
  };
  return inProgress ? (
    children
  ) : (
    <div className={"window menu-block"}>
      <p>
        You will be asked to guess the amount of sugar cubes in 10 everyday
        foods.
      </p>
      <div>
        <p>Whats Your Age Range?</p>
        <ul>
          <li>
            <input
              type={"radio"}
              name={"age-range"}
              value={30}
              id={"adult"}
              checked={true}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor={"adult"}> 10 +</label>
          </li>
          <li>
            <input
              type={"radio"}
              name={"age-range"}
              value={24}
              id={"child"}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor={"child"}>7 - 10</label>
          </li>
        </ul>
        <p>This is used to calculate your daily allowance</p>
      </div>
      <button
        className={"btn btn-submit wrap-tight"}
        onClick={() => handleStart(rdi)}
      >
        {" "}
        Start Game
      </button>
    </div>
  );
}
