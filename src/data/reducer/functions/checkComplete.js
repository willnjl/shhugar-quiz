const checkComplete = (state) => {
  let completed = state.currentQuestion === state.questions.length - 1;
  return {
    ...state,
    completed,
  };
};

export default checkComplete;
