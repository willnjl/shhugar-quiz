import { initialQuiz } from "./init";
import guessChecker from "./functions/guessChecker";
import checkComplete from "./functions/checkComplete";

export default (state = initialQuiz, { type, payload }) => {
  const { currentQuestion, questions } = state;
  switch (type) {
    case "GUESS.CHANGE":
      return { ...state, guess: state.guess + payload };
    case "GUESS.SUBMIT":
      return checkComplete(guessChecker(state, payload));
    case "QUIZ.NEXT":
      return { ...state, currentQuestion: currentQuestion + 1 };
    case "QUIZ.START":
      return { ...state, inProgress: true, rdi: payload.rdi };
    case "RESET":
      return { ...initialQuiz };
    default:
      return state;
  }
};
