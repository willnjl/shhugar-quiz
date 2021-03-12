import { initialQuiz } from "./init";

export default (state = initialQuiz, { type, payload }) => {
  switch (type) {
    case "blah":
      return { ...state, ...payload };

    default:
      return state;
  }
};
