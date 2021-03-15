import { initialPlayer } from "./init";

export default (state = initialPlayer, { type, payload }) => {
  switch (type) {
    case "GUESS.SUBMIT":
      return { ...state, hasAnswered: true };
    case "QUIZ.NEXT":
      return { ...state, hasAnswered: false };
    default:
      return state;
  }
};
