import { connect } from "react-redux";
import App from "./App";

let mapStateToProps = ({ quiz, player }) => ({ quiz, player });

export default connect(mapStateToProps)(App);
