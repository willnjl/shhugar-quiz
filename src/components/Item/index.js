import { connect } from "react-redux";
import Item from "./Item";

let mapStateToProps = ({ quiz }) => {
  const { currentQuestion, questions } = quiz;
  return {
    q: questions[currentQuestion],
    preload: questions[currentQuestion + 1],
  };
};

export default connect(mapStateToProps)(Item);
