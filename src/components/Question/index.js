import { connect } from "react-redux";
import Question from "./Question";

const mapStateToProps = ({ quiz }) => {
  const { questions, currentQuestion } = quiz;
  return {
    question: questions[currentQuestion],
  };
};

export default connect(mapStateToProps)(Question);
