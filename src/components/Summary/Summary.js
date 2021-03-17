import React, { useEffect } from "react";
import { gsap } from "gsap";
import tick from "../../assets/tick.jpg";
import cross from "../../assets/cross.jpg";
export default function Summary({ player, handleReset }) {
  useEffect(() => {
    let tween = gsap.from(".score", {
      scale: 5,
      rotate: 15,
      ease: "bounce",
      duration: 1.2,
    });
  }, [player]);

  return (
    <div className={"window"}>
      <h1>
        Your Score <span className="score">{player.totalScore}</span>{" "}
        <small>/ 10</small>
      </h1>
      <div className={"table-container"}>
        <table className={"summary-table"}>
          <thead>
            <th scope={"col"}></th>
            <th scope={"col"}></th>
            <th scope={"col"}> Sugar Cubes</th>
            <th scope={"col"}></th>
          </thead>
          {player.scoreCard.map((q) => {
            return (
              <tr>
                <td>
                  <img src={q.imgUrl} className={"summary-icon"} />
                </td>
                <td>{q.messages.question}</td>

                <td>{Math.round(+q.answer)}</td>
                <td>
                  {q.pass ? (
                    <img src={tick} className={"mark"} />
                  ) : (
                    <img src={cross} className="mark" />
                  )}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <button class={"btn btn-submit"} onClick={handleReset}>
        play again
      </button>
    </div>
  );
}
