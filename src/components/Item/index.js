import { connect } from "react-redux";
import Item from "./Item";

let mapStateToProps = ({ quiz }) => {
  const { currentQuestion, questions } = quiz;
  return {
    q: questions[currentQuestion],
  };
};

export default connect(mapStateToProps)(Item);
