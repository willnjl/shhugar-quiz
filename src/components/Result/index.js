import { connect } from "react-redux";
import Result from "./Result";

let mapStateToProps = ({ quiz }) => ({
  q: quiz.questions[quiz.currentQuestion],
  quiz,
});
let mapDispatchToProps = (dispatch) => {
  return {
    handleNext: (data) => dispatch({ type: "QUIZ.NEXT", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
