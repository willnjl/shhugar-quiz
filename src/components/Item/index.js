import { connect } from "react-redux";
import Item from "./Item";

const mapStateToProps = ({ quiz }) => {
  const { questions, currentQuestion } = quiz;
  return {
    item: questions[currentQuestion],
  };
};

export default connect(mapStateToProps)(Item);
