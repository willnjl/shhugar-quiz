import { connect } from "react-redux";
import AnswerInput from "./AnswerInput";

let mapStateToProps = ({ quiz, player }) => ({
  quiz,
  hasAnsered: player.hasAnsered,
});

let mapDispatchToProps = (dispatch) => ({
  handleClick: (val) => dispatch({ type: "GUESS.CHANGE", payload: val }),
  handleSubmit: () => dispatch({ type: "GUESS.SUBMIT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerInput);
