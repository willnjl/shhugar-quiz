const guessChecker = (state) => {
  const { guess, questions, currentQuestion } = state;
  const q = questions.find((q) => q.id === currentQuestion);

  const result = guess === q.answer;
  console.log(result);
  return {
    ...state,
  };
};

export default guessChecker;
