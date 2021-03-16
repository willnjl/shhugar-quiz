const addToScore = (state, { q, pass }) => {
  let pointsToAdd = pass ? 1 : 0;
  return {
    ...state,
    scoreCard: [...state.scoreCard, { ...q, pass }],
    totalScore: state.totalScore + pointsToAdd,
  };
};

export default addToScore;
