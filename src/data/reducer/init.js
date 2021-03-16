import questions from "../questions";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(questions);

let setQuestions = (questions) => {
  return questions.map((q, i) => {
    return {
      ...q,
      id: i,
    };
  });
};
export const initialQuiz = {
  questions: setQuestions(questions),
  pass: false,
  guess: 0,
  currentQuestion: 0,
  inProgress: false,
  rdi: 0,
};

export const initialPlayer = {
  totalScore: 0,
  scoreSheet: [],
  hasAnswered: false,
};
