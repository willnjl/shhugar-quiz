const guessChecker = (state) => {
  const { guess, questions, currentQuestion } = state;
  const q = questions.find((q) => q.id === currentQuestion);
  const result = guess === Math.round(q.answer);

  return {
    ...state,
    guess: 0,
    pass: result,
  };
};

export default guessChecker;
