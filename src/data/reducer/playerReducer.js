import { initialPlayer } from "./init";
import addToScore from "./functions/addToScore";

export default (state = initialPlayer, { type, payload }) => {
  switch (type) {
    case "GUESS.SUBMIT":
      return { ...state, hasAnswered: true };
    case "QUIZ.NEXT":
      return { ...state, hasAnswered: false };
    case "QUIZ.START":
      return { ...state, hasAnswered: false };
    case "PLAYER.RECORD_SCORE":
      return addToScore(state, payload);
    case "RESET":
      return { ...initialPlayer };
    default:
      return { ...state };
  }
};
