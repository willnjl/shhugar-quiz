import { initialQuiz } from "./init";
import guessChecker from "./functions/guessChecker";

export default (state = initialQuiz, { type, payload }) => {
  const { currentQuestion, questions } = state;
  switch (type) {
    case "GUESS.CHANGE":
      return { ...state, guess: state.guess + payload };
    case "GUESS.SUBMIT":
      return guessChecker(state, payload);
    case "QUIZ.NEXT":
      return { ...state, currentQuestion: currentQuestion + 1 };
    case "QUIZ.START":
      return { ...state, inProgress: true, rdi: payload.rdi };
    default:
      return state;
  }
};
