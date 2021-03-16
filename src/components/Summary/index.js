import { connect } from "react-redux";
import Summary from "./Summary";

let mapStateToProps = ({ player, quiz }) => ({
  player,
  quiz,
});
let mapDispatchToProps = (dispatch) => {
  return {
    handleReset: () => dispatch({ type: "RESET" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
