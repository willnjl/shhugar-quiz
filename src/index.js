import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import App from "./components/App/App";
import { createStore, combineReducers } from "redux";
import quizReducer from "./data/reducer/quizReducer";
import playerReducer from "./data/reducer/playerReducer";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

let rootReducer = combineReducers({
  quiz: quizReducer,
  player: playerReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
