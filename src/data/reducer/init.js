export const initialQuiz = {
  questions: [
    {
      id: 0,
      imgUrl: "",
      answer: 0,
      messages: {
        pass: "",
        fail: "",
      },
    },
  ],
  pass: false,
  currentQuestion: 0,
};

export const initialPlayer = {
  totalScore: 0,
  scoreSheet: [],
};
