import React, { useEffect } from "react";
import { gsap } from "gsap";
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
          {player.scoreCard.map((q) => {
            return (
              <tr>
                <td>
                  <img src={q.imgUrl} className={"summary-icon"} />
                </td>
                <td>{q.messages.question}</td>

                <td>{q.answer}</td>
                <td>{q.pass ? "✔" : "✗"}</td>
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
