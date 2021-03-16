import { connect } from "react-redux";
import Menu from "./Menu";

let mapStateToProps = ({ quiz }) => ({ inProgress: quiz.inProgress });

let mapDispatchToProps = (dispatch) => {
  return {
    handleStart: (rdi) => dispatch({ type: "QUIZ.START", payload: { rdi } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
