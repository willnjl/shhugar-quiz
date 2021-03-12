import { initialQuiz } from "./init";
import guessChecker from "./functions/guessChecker";

export default (state = initialQuiz, { type, payload }) => {
  switch (type) {
    case "GUESS.CHANGE":
      return { ...state, guess: state.guess + payload };
    case "GUESS.SUBMIT":
      return guessChecker(state, payload);
    default:
      return state;
  }
};
