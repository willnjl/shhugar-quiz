import { connect } from "react-redux";
import Result from "./Result";

let mapStateToProps = ({ player, quiz }) => ({
  q: quiz.questions[quiz.currentQuestion],
  quiz,
  hasAnswered: player.hasAnswered,
});
let mapDispatchToProps = (dispatch) => {
  return {
    handleNext: (data) => dispatch({ type: "QUIZ.NEXT", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
