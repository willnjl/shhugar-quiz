import { connect } from "react-redux";
import Bottom from "./Bottom";

let mapStateToProps = ({ player }) => ({
  hasAnswered: player.hasAnswered,
});

export default connect(mapStateToProps)(Bottom);
