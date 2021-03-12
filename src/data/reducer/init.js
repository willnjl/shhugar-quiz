export const initialQuiz = {
  questions: [
    {
      id: 0,
      imgUrl:
        "https://hips.hearstapps.com/prima.cdnds.net/assets/17/13/1490780833-kitkat.jpg",
      answer: 0,
      messages: {
        question: "jar of pasta sauce",
        pass: "",
        fail: "",
      },
    },
  ],
  pass: false,
  guess: 0,
  currentQuestion: 0,
};

export const initialPlayer = {
  totalScore: 0,
  scoreSheet: [],
};
